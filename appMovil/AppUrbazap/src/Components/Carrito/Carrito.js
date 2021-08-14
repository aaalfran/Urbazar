import React,{useState, useEffect} from 'react';
import NavBar from '../navBar/NavigationBar';
import {View, Text,ScrollView} from 'react-native';
import { NativeBaseProvider ,Button,Spinner,Modal} from "native-base";
import CategoriesBar from '../navBar/CategoriesBar';
import { useUsuario } from '../../Context/usuarioContext';
import axios from 'axios';
import data from '../../../enviroment';
import CarritoItem from './CarritoItem';
const Carrito = (props) => {
    const { usuario, logOut } = useUsuario();
    const [listaItems,setListaItems] = useState([]);
    const [load,setLoad] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [precioTotal,setPrecioTotal] = useState(0);
    const [vacio,setVacio] = useState(false);
    useEffect(() => {
        setListaItems([])
        axios.get(`http://${data.number}/clientes/persona/${usuario.id}`).then(response => {
            axios.get(`http://${data.number}/carrito/cliente/${response.data[0].id}`).then(response => {
                let resultado = response.data[0]
                axios.get(`http://${data.number}/detalle-carrito/carrito/${resultado.id}`).then(response => {
                    let lista = response.data;
                    if(lista.length > 0) {
                        for(let item of lista) {
                            axios.get(`http://${data.number}/productos/${item.idProducto}`).then(res => {
                                let producto = res.data;
                                const nombre = producto.nombre
                                const precio = producto.precio
                                const imagen = producto.source
                                const desc = producto.descripcion
                                const cant = item.cantidad
                                setListaItems(current => current.concat(<CarritoItem key={item.idDetalle}src={imagen} nombre={nombre} precio={cant*precio} cantidad = {cant} idDetalle ={item.idDetalle} navigation={props.navigation} ></CarritoItem>))
                                setPrecioTotal(current => current + cant*precio)
                                

                            })
                        }
                        setLoad(true);
                    }else{
                        setLoad(true);
                        setVacio(true);
                    }
                }).catch(err => {

                })
            }).catch(err =>{

            })
        }).catch(err => {

        })
    },[])
    console.log(usuario)
    return (
        <NativeBaseProvider>
            <NavBar navigation={props.navigation}/>
            <CategoriesBar/>
            <View style={{flex:19}}> 
            {!load ? <Spinner color="blue.500" style={{marginTop: 10}}/>: <React.Fragment></React.Fragment>}
            {vacio ? <Text style={{textAlign: 'center',marginTop: '50%',fontSize: 40,opacity: 0.3}}>Carrito Vacio</Text>: <React.Fragment></React.Fragment>}
            <ScrollView>
                {listaItems}
            </ScrollView>
            </View> 

            <View style={{justifyContent: 'center',alignItems: 'center',flex:1,marginBottom:20}}>
            <Button backgroundColor="#506048" onPress={() => setShowModal(true)}>Confirmar Compra</Button>
            </View>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.Header>Confirmar Compra</Modal.Header>
                    <Modal.Body>
                        <Text>
                            El precio total es: ${precioTotal}
                        </Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group variant="ghost" space={2}>
                        <Button                             
                            onPress={() => {
                            setShowModal(false)
                            }}>Cancelar</Button>
                        <Button
                            onPress={() => {
                            setShowModal(false)
                            }}
                        >
                            Aceptar
                        </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </NativeBaseProvider>
    );
}

export default Carrito;

import React,{useState, useEffect} from 'react';
import NavBar from '../navBar/NavigationBar';
import {View, Text,ScrollView} from 'react-native';
import { NativeBaseProvider ,Button,Spinner,Modal} from "native-base";
import CategoriesBar from '../navBar/CategoriesBar';
import CarritoItem from './CarritoItem';
import { useUsuario } from '../../Context/usuarioContext';


const deleteProducts = async (lista,setLista,setVacio,setPrecioTotal,borrarCarrito) => {

    borrarCarrito()
    setLista([])
    setVacio(true)
    setPrecioTotal(0)
    
}
const Carrito = (props) => {
    const { usuario, logOut, carrito, borrarCarrito } = useUsuario();
    const [listaItems,setListaItems] = useState([]);
    const [load,setLoad] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [precioTotal,setPrecioTotal] = useState(0);
    const [vacio,setVacio] = useState(true);
    const [idDetalle,setIdDetalle] = useState([]);

    useEffect(() => {
        const unsuscribe = props.navigation.addListener('focus',() => {
            setListaItems([])
            setLoad(false);

            if(carrito.length > 0) {
                for(let item of carrito) {
                    let producto = item.producto;
                    const nombre = producto.nombre
                    const precio = producto.precio
                    const imagen = producto.source
                    const desc = producto.descripcion
                    const cant = item.cantidad
                    setListaItems(current => current.concat(<CarritoItem key={item.key}src={imagen} nombre={nombre} precio={cant*precio} cantidad = {cant} id ={producto.id} navigation={props.navigation} ></CarritoItem>))
                    setIdDetalle(current => current.concat(item.idDetalle))
                    
                }
                setLoad(true);
                setVacio(false);
            }else{
                setLoad(true);
            }
        });
        return unsuscribe;
    },[carrito])

    useEffect(() => {
        let sum = 0;
        for(let item of carrito) {
            sum = sum + item.total;
            
        }
        setPrecioTotal(sum);
    }, [carrito])


    return (
        <NativeBaseProvider>
            <NavBar navigation={props.navigation}/>
            <CategoriesBar navigation={props.navigation}/>
            <View style={{flex:1000}}> 
            {!load ? <Spinner color="blue.500" style={{marginTop: 10}}/>: <React.Fragment></React.Fragment>}
            {carrito.length === 0 ? <Text style={{textAlign: 'center',marginTop: '50%',fontSize: 40,opacity: 0.3}}>Carrito Vacio</Text>: <React.Fragment></React.Fragment>}
            <ScrollView>
                {listaItems}

                <View style={carrito.length > 0 ? 
                    {justifyContent: 'center',alignItems: 'center',flex:0,marginBottom:20, marginTop: 15} :
                    {height: 0, width: 0}}>
                <Button 
                    backgroundColor="#02023d" 
                    onPress={() => setShowModal(true)}>
                        Confirmar Compra
                </Button>
                </View>
            </ScrollView>
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
                            deleteProducts(idDetalle,setListaItems,setVacio,setPrecioTotal,borrarCarrito)
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

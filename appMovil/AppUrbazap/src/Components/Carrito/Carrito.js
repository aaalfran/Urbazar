import React,{useState, useEffect} from 'react';
import NavBar from '../navBar/NavigationBar';
import {View, Text,ScrollView} from 'react-native';
import { NativeBaseProvider ,Button} from "native-base";
import CategoriesBar from '../navBar/CategoriesBar';
import { useUsuario } from '../../Context/usuarioContext';
import axios from 'axios';
import data from '../../../enviroment';
import CarritoItem from './CarritoItem';
const Carrito = (props) => {
    const { usuario, logOut } = useUsuario();
    const [listaItems,setListaItems] = useState([]);

    useEffect(() => {
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
                                setListaItems(current => current.concat(<CarritoItem key={item.idDetalle}src={imagen} nombre={nombre} precio={cant*precio} cantidad = {cant} idDetalle ={item.idDetalle}></CarritoItem>))

                            })
                        }
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
            <ScrollView>
                {listaItems}
            </ScrollView>
            </View> 
            <View style={{justifyContent: 'center',alignItems: 'center',flex:1,marginBottom:20}}>
            <Button backgroundColor="#506048">Confirmar Compra</Button>
            </View>

        </NativeBaseProvider>
    );
}

export default Carrito;

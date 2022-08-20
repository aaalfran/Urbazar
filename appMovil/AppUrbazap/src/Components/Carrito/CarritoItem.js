import React,{ useState} from 'react';
import {View, Text,Image} from 'react-native';
import { NativeBaseProvider ,IconButton} from "native-base";
import styles from './styles';
import { style } from 'styled-system';
import data from '../../../enviroment';
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';
const borrarElemento = (props,setHide) => {
<<<<<<< HEAD
    axios.delete(`http://${data.number}/detalle-carrito/${props.idDetalle}`).then(res => {
=======
    axios.delete(`${data.url}/detalle-carrito/${props.idDetalle}`).then(res => {
>>>>>>> b132d7c8f249a0fb211d3bdf94fab04e87c5e2d1
        setHide(true)
    })

  }
const CarritoItem = (props) => {
    const [hide,setHide] = useState(false);
    console.log(props)
    return (
        <View style={hide ? styles.oculto : styles.carta}> 
        <View>
        <Image source= {{uri: props.src }} style={ hide ? styles.oculto : {              
              height: 150,width: 150,resizeMode:'contain'}}
        />     
        </View>
            <View style={{flexDirection: 'column',flex:1}}>
                <Text style={styles.titulo}>{props.nombre}</Text>
                <Text style={styles.texto}>Precio: ${props.precio}</Text>
                <Text style={styles.texto}>Cantidad: {props.cantidad}</Text>
            </View>
            <IconButton onPress={() => borrarElemento(props,setHide) } icon={<Icon name="trash" color="#506048"  size={20}/> } />
        </View>
    );
}

export default CarritoItem;

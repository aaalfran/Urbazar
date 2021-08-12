import React from 'react';
import {View, Text,Image} from 'react-native';
import { NativeBaseProvider } from "native-base";
import styles from './styles';
import { style } from 'styled-system';

const CarritoItem = (props) => {
    console.log(props)
    return (
        <View style={styles.carta}> 
        <View>
        <Image source= {{uri: props.src }} style={{              
              height: 150,width: 150,resizeMode:'contain'}}
        />     
        </View>
            <View style={{flexDirection: 'column',flex:1}}>
                <Text style={styles.titulo}>{props.nombre}</Text>
                <Text style={styles.texto}>Precio: ${props.precio}</Text>
                <Text style={styles.texto}>Cantidad: {props.cantidad}</Text>
            </View>
        </View>
    );
}

export default CarritoItem;

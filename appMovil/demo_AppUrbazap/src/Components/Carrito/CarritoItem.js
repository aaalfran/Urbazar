import React,{ useState} from 'react';
import {View, Text,Image} from 'react-native';
import { NativeBaseProvider ,IconButton} from "native-base";
import styles from './styles';
import { style } from 'styled-system';
import data from '../../../enviroment';
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';
import { useUsuario } from '../../Context/usuarioContext';


const borrarElemento = (props,setHide,carrito,borrarProducto) => {

    for (let item of carrito) {
        if (item.producto.id === props.id) {
            borrarProducto(item);
            setHide(true);
        }
    }

/*     axios.delete(`http://${data.number}/detalle-carrito/${props.idDetalle}`).then(res => {
        setHide(true)
    }) */

  }
const CarritoItem = (props) => {

    console.log(props);
    const [hide,setHide] = useState(false);
    const { carrito, borrarProducto } = useUsuario();


    console.log(props)
    return (
        <View style={hide ? styles.oculto : styles.carta}> 
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
            <IconButton onPress={() => borrarElemento(props,setHide, carrito, borrarProducto) } icon={<Icon name="trash" color="#ed4258" size={20}/> } />
        </View>
    );
}

export default CarritoItem;

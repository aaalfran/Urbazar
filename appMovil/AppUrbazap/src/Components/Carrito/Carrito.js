import React from 'react';
import NavBar from '../navBar/NavigationBar';
import {View, Text} from 'react-native';
import { NativeBaseProvider } from "native-base";
import CategoriesBar from '../navBar/CategoriesBar';
const Carrito = (props) => {
    return (
        <NativeBaseProvider>
            <NavBar navigation={props.navigation}/>
            <CategoriesBar/>
            <View> 
                <Text>
                 No hay items en el carrito
                </Text>
            </View> 

        </NativeBaseProvider>
    );
}

export default Carrito;

import React from 'react'
import NavBar from '../navBar/NavigationBar';
import {View, Text} from 'react-native';
import { NativeBaseProvider } from "native-base";
import CategoriesBar from '../navBar/CategoriesBar';

export default function Detail({navigation}){
    return(
        <NativeBaseProvider>
            <NavBar navigation={navigation}/>
        <CategoriesBar/>
            <View> 
                <Text>
                 Now u r in the detail product window.
                </Text>
            </View> 
            <View> 
                <Text>
                 HOLA2
                </Text>
            </View>

        </NativeBaseProvider>
    )
}


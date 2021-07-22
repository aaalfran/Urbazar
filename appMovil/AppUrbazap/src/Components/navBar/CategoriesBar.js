import React from 'react'
import { HStack, IconButton, NativeBaseProvider } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome'
import {View, Text} from 'react-native'


function CategoriesBar() {
    return (
        <View style={{flex:1}} >
            <HStack bg='#e6e6e6' justifyContent='center' alignItems='center'>
                <HStack space={3}>
                    <IconButton icon={<Icon name="home" color="#506048"  size={20}/> } />
                    <IconButton icon={<Icon name="suitcase" color="#506048"  size={20}/> } />
                    <IconButton icon={<Icon name="desktop" color="#506048" size={20}/> } />
                    <IconButton icon={<Icon name="cutlery" color="#506048" size={20}/> } />
                    <IconButton icon={<Icon name="bath" color="#506048" size={20}/> } />
                    <IconButton icon={<Icon name="eyedropper" color="#506048" size={20}/> }/>
                    <IconButton icon={<Icon name="rocket" color="#506048" size={20}/> } />
                </HStack>
            </HStack>
        </View>
    )
}

export default function () {
    return (

        <NativeBaseProvider>
            <CategoriesBar />
        </NativeBaseProvider>
    )
}
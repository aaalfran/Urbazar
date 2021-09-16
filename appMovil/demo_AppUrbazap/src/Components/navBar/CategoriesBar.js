import React from 'react'
import { HStack, IconButton, NativeBaseProvider } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome'
import {View, Text} from 'react-native'
import {storeCategoria} from "../../Context/categoriaContext";



function CategoriesBar({navigation}) {
    
    const handlePress= (categoria, page)=>{
        storeCategoria(categoria)
        .then(()=>{
            navigation.navigate(page);
        })
    }
    const color_icon = "#02023d";

    return (
        <NativeBaseProvider>
        <View style={{flex:1}} > 
            <HStack bg='#E8E8F0' justifyContent='center' alignItems='center'>
                <HStack space={3}>
                    <IconButton icon={<Icon name="home" color={color_icon}  size={20}/> } onPress={()=> handlePress("0", "Home")} />
                    <IconButton icon={<Icon name="suitcase" color={color_icon}  size={20}/> } onPress={()=> {handlePress("1", "Filtro/1")} }/>
                    <IconButton icon={<Icon name="desktop" color={color_icon} size={20}/> } onPress={()=> handlePress("2", "Filtro/2")} />
                    <IconButton icon={<Icon name="cutlery" color={color_icon} size={20}/> } onPress={()=> handlePress("3", "Filtro/3")} />
                    <IconButton icon={<Icon name="bath" color={color_icon} size={20}/> } onPress={()=> handlePress("4", "Filtro/4")}/>
                    <IconButton icon={<Icon name="eyedropper" color={color_icon} size={20}/>} onPress={()=> handlePress("5", "Filtro/5")} />
                    <IconButton icon={<Icon name="rocket" color={color_icon} size={20}/> } onPress={()=> handlePress("1", "Filtro/1")}/>
                </HStack>
            </HStack>
        </View>
        </NativeBaseProvider>
    )
}

export default CategoriesBar;
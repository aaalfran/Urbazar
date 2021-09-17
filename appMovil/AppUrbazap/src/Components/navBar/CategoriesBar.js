import React from 'react'
import { HStack, IconButton, NativeBaseProvider } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome'
import {View, Text} from 'react-native'
import {storeCategoria} from "../../Context/categoriaContext";



function CategoriesBar({navigation}) {
    
    const handlePress= (categoria, page)=>{
        storeCategoria(categoria)
        .then(()=>{
            navigation.navigate( page);
        
          })
    }

    return (
        <NativeBaseProvider>
        <View style={{flex:1}} > 
            <HStack bg='#e6e6e6' justifyContent='center' alignItems='center'>
                <HStack space={3}>
                    <IconButton icon={<Icon name="home" color="#02023d"  size={20}/> } onPress={()=> handlePress("0", "Home")} />
                    <IconButton icon={<Icon name="suitcase" color="#02023d"  size={20}/> } onPress={()=> {handlePress("1", "Filtro")} }/>
                    <IconButton icon={<Icon name="desktop" color="#02023d" size={20}/> } onPress={()=> handlePress("2", "Filtro")} />
                    <IconButton icon={<Icon name="cutlery" color="#02023d" size={20}/> } onPress={()=> handlePress("3", "Filtro")} />
                    <IconButton icon={<Icon name="bath" color="#02023d" size={20}/> } onPress={()=> handlePress("4", "Filtro")}/>
                    <IconButton icon={<Icon name="eyedropper" color="#02023d" size={20}/>} onPress={()=> handlePress("5", "Filtro")} />
                    <IconButton icon={<Icon name="rocket" color="#02023d" size={20}/> } onPress={()=> handlePress("1", "Filtro")}/>
                </HStack>
            </HStack>
        </View>
        </NativeBaseProvider>
    )
}

export default CategoriesBar;
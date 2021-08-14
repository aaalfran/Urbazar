import React, { useEffect, useState } from 'react'
import {
    NativeBaseProvider, Box, 
    VStack, Image, 
    Heading, Stack,
} from 'native-base'
import { View, Text } from 'react-native'
import CategoriesBar from '../navBar/CategoriesBar';
import NavBar from '../navBar/NavigationBar';
import styles from "./styles";
import {getCategoria} from '../../Context/categoriaContext';
import Request from '../../ApiRequest/Request';
import data from '../../../enviroment';
import { backgroundColor } from 'styled-system';




let DrawContent = ({categorie}) =>{
    console.log("OKi")
    if (categorie.length>0){
        let url =  `${data.categoriesFilter}`
        let urlComposed = url + `${categorie}`
        let productsFromCategories= Request(urlComposed)
 
    return(
        <View style={styles.contenedor_productos}>
        {
            productsFromCategories.map(product=>(
                <DrawBox key={product.id} source={product.source} nombre={product.nombre} precio={product.precio}/>
            ))
    }
    </View>
    )

    }
    return <></>
    
}

let DrawBox = ({source, nombre, precio}) => {
    return(
        <Box
        bg="white"
        rounded="lg"
        minWidth="40%"
        style={{margin: 10}}
        shadow={4}
    >
        <Image source={{ uri: `${source}` }} alt="image base" resizeMode="cover" height={150} roundedTop="md" />
       
        <Stack space={2} p={[4, 4, 8]}>
            <Heading size="sm" noOfLines={2}>
            {nombre}
            </Heading>
            <Text color="gray.400">$ {precio}</Text>
        </Stack>
    </Box> 

    )
}

let filtroVista = (props) => {
    const [categorie, setCategorie] = useState("")

       
    useEffect(()=>{
            getCategoria()
            .then((cat)=> {
                setCategorie(cat)
            }
                
            )
    })


    return (
        <NativeBaseProvider>
            <NavBar navigation={props.navigation} />
            <CategoriesBar />
            <View style={{ flex: 19 }}>

                <VStack >
                    <DrawContent categorie={categorie}/>
                    

                    
                   

                </VStack>
            </View>
        </NativeBaseProvider>
    )
}

export default filtroVista
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
import data from '../../../enviroment';
import axios from 'axios';

let DrawContent = ({products}) =>{
    return(
        <View style={styles.contenedor_productos}>
        {
            products.map(product=>(
                <DrawBox key={product.id} source={product.source} nombre={product.nombre} precio={product.precio}/>
            ))
        }
        </View>
    )
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
            <Heading size="sm" noOfLines={2}> {nombre} </Heading>
            <Text color="gray.400">$ {precio}</Text>
        </Stack>
    </Box> 

    )
}

let filtroVista = (props) => {
    const [categorie, setCategorie] = useState("")
    const [products, setProducts] = useState([])

    const unsuscribe = props.navigation.addListener('focus',() => {
        getCategoria()
        .then((cat)=> {
            setCategorie(cat)
        })
        .catch(e=> console.log(e))           
        
    })

    useEffect(() => {

        let url =  `${data.categoriesFilter}`;
        let urlComposed = url + `${categorie}`;

        axios.get(urlComposed)
        .then(response => {
            setProducts(response.data)
        })
        .catch(e=> console.log(e));

    }, [categorie])

    return (
        <NativeBaseProvider>
            <NavBar navigation={props.navigation} />
            <CategoriesBar navigation={props.navigation}/>
            <View style={{ flex: 1000 }}>
                <VStack >
                    <DrawContent categorie={categorie} products={products}/>
                </VStack>
            </View>
        </NativeBaseProvider>
    )
}

export default filtroVista
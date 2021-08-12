import React, { useState, useEffect } from 'react'
import {
    NativeBaseProvider, Box, VStack, Avatar, Image, AspectRatio, Heading,
    StatusBar, Input,
    Button, Select,
    CheckIcon, Stack,
    HStack, Center,
    IconButton
} from 'native-base'
import { View, Text } from 'react-native'
import CategoriesBar from '../navBar/CategoriesBar';
import NavBar from '../navBar/NavigationBar';
import styles from "./styles";

let DrawBox = () => {
    return(
        <Box
        bg="white"
        rounded="lg"
        maxWidth="30%"
        style={{margin: 10}}
        shadow={4}
    >
        <Image source={{ uri: "https://i.pinimg.com/474x/60/5b/06/605b06ee28475d4cbf47b287ebeb42a5.jpg" }} alt="image base" resizeMode="cover" height={150} roundedTop="md" />
       
        <Stack space={4} p={[4, 4, 8]}>
            <Heading size="sm" noOfLines={2}>
                Zapatos Nikyy
            </Heading>
            <Text color="gray.400"> $4</Text>
        </Stack>
    </Box>

    )
}

let filtroVista = (props) => {

    



    return (
        <NativeBaseProvider>
            <NavBar navigation={props.navigation} />
            <CategoriesBar />
            <View style={{ flex: 19 }}>

                <VStack style={styles.contenedor_productos}>
                    <DrawBox/>
                    <DrawBox/>
                    <DrawBox/>
                    <DrawBox/>
                    <DrawBox/>
                    

                    
                   

                </VStack>
            </View>
        </NativeBaseProvider>
    )
}

export default filtroVista
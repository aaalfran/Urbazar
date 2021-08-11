import React from "react";
import { HStack, IconButton, Icon, NativeBaseProvider, Text, Box, StatusBar } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native'

function Main(props) {
    return (

      <View style={{ flex: 2}}>
        <NativeBaseProvider>
          <StatusBar backgroundColor="#506048" barStyle="light-content" />

          <Box safeAreaTop backgroundColor="#506048" />
          <HStack bg='#506048' px={1} py={4} justifyContent='space-between' alignItems='center'>
            <HStack space={4} alignItems='center'>
              <IconButton icon={<Icon size="sm" as={<MaterialIcons name='menu' />} color="white" />} onPress={()=> props.navigation.openDrawer()}/>
              <Text color="white" fontSize={20} fontWeight='bold'>UrbazApp</Text>
            </HStack>
            <HStack space={2}>
              <IconButton icon={<Icon as={<MaterialIcons name='search' />} color="white" size='sm' />} />
              <IconButton icon={<Icon as={<MaterialIcons name='shopping-cart' />} size='sm' color="white" />} onPress = {() => {props.navigation.navigate('Carrito')
              }}/>
            </HStack>
          </HStack>
        </NativeBaseProvider>
      </View>
    )
}

export default Main


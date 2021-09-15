import React, { useState } from "react";
import { HStack, IconButton, Icon, NativeBaseProvider, Text, Box, StatusBar } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { View, TextInput, Image } from 'react-native'

function Main(props) {

  const [outputText, setOutputText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const itemInputHandler = (enteredText) => {
    setOutputText(enteredText);
  }

  const itemHandler = () => {
    setSubmittedText(outputText);
    setOutputText('');

    props.navigation.navigate('SearchBar', { data1: outputText });
  
  }
  return (
    <View style={{ flex: 1.87 }}>
      <NativeBaseProvider>
        <StatusBar backgroundColor="#02023d" barStyle="light-content" />
        <Box safeAreaTop backgroundColor="#ed4258" />
        <HStack bg='#02023d' px={1} py={4} justifyContent='space-between' alignItems='center'>
          <HStack space={4} alignItems='center'>
            <IconButton icon={<Icon size="sm" as={<MaterialIcons name='menu' />} color="white" />} onPress={() => props.navigation.openDrawer()} />
            <Image source={require('../../images/logo_title2_v2.png')} style={{width:75, height: 40}}/>
          </HStack>
          <HStack space={2}>
            <TextInput placeholder='Buscar...' paddingLeft={8} backgroundColor='white' borderRadius={5} width={170} fontSize={17} onChangeText={itemInputHandler} value={outputText} />
            <IconButton icon={<Icon as={<MaterialIcons name='search' />} color="white" size='sm' />} onPress={itemHandler} />
            <IconButton icon={<Icon as={<MaterialIcons name='shopping-cart' />} size='sm' color="white" />} onPress={() => {
              props.navigation.navigate('Carrito')
            }} />
          </HStack>
        </HStack>
      </NativeBaseProvider>
    </View>
  )
}

export default Main


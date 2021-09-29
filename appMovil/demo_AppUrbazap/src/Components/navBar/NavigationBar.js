import React, { useState } from "react";
import { HStack, IconButton, Icon, NativeBaseProvider, Text, Box, StatusBar } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { View, TextInput, Image } from 'react-native'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
    <KeyboardAwareScrollView keyboardShouldPersistTaps= 'always'> 
      <View>
        <NativeBaseProvider>
          <StatusBar backgroundColor="#02023d" barStyle="light-content" />
          <HStack bg='#02023d' px={0} py={4} justifyContent='space-between' alignItems='center' style={{display:"flex", flexDirection:"row"}}>
            <HStack space={0} alignItems='center'>
              <IconButton icon={<Icon size="sm" as={<MaterialIcons name='menu' />} color="white" />} onPress={() => props.navigation.openDrawer()} />
              <Image source={require('../../images/logo_title2_v2.png')} style={{width:68, height: 38, marginRight: 5}}/>
            </HStack>
            <HStack space={1}>
              <TextInput 
                placeholder='Buscar...' 
                paddingLeft={8} backgroundColor='white' 
                borderRadius={5} 
                width={"70%"} 
                fontSize={17} 
                onChangeText={itemInputHandler} 
                value={outputText} 
                onSubmitEditing={itemHandler}
                />
              <IconButton icon={<Icon as={<MaterialIcons name='shopping-cart' />} size='sm' color="white" />} onPress={() => {
                props.navigation.navigate('Carrito')
              }} />
            </HStack>
            
          </HStack>
        </NativeBaseProvider>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default Main


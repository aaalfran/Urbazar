import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet } from 'react-native'
import MainComponent from './src/Components/Main/Main'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Detalle from './src/Components/Producto/Detalle'

const Stack = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={MainComponent} options={{ headerTitleAlign: 'center' }}></Stack.Screen>
          <Stack.Screen name="ProductoDetail" component={Detalle} options={{ headerTitleAlign: 'center', title: 'Detalle del Producto' }}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>

  )
}

StyleSheet.create({
  container: {
    backgroundColor: '#E8E8F0'
  }
})

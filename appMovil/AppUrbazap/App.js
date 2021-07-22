import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Menu from './src/Drawers/DrawerMenu'
import Main from "./src/Components/Main/Main";
import DetailProduct from "./src/Components/Producto/DetailProduct";

export default function App () {

  const Drawer = createDrawerNavigator()


  return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
          <Drawer.Screen name="Home" component={Main}  />
          <Drawer.Screen name="Perfil" component={DetailProduct} />
        </Drawer.Navigator>
      </NavigationContainer>

  )
}

StyleSheet.create({
  container: {
    backgroundColor: '#E8E8F0'
  }
})

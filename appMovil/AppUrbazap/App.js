import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from './src/Drawers/DrawerMenu'
import Main from "./src/Components/Main/Main";
import DetailProduct from "./src/Components/Producto/DetailProduct";
import LoginComponent from "./src/Components/Login/Login";
import { UsuarioProvider, useUsuario } from './src/Context/usuarioContext';
import RegistroComponent from "./src/Components/Registro.js/Registro";


export default () => <UsuarioProvider>
  <App></App>
</UsuarioProvider>


function App() {
  const { usuario} = useUsuario();
  const Drawer = createDrawerNavigator()

  


  return (
    <>
      {
        usuario ?
          <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
              <Drawer.Screen name="Home" component={Main} />
              <Drawer.Screen name="Perfil" component={DetailProduct} />
            </Drawer.Navigator>
          </NavigationContainer>
          :
          <NavigationContainer>
            <Drawer.Navigator>
              <Drawer.Screen name="Login" component={LoginComponent} />
              <Drawer.Screen name="Registro" component={RegistroComponent} />
            </Drawer.Navigator>
          </NavigationContainer>
}
    </>
  )
}

StyleSheet.create({
  container: {
    backgroundColor: '#E8E8F0'
  }
})

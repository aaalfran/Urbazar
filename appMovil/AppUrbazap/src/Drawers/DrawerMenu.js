import * as React from 'react';
import { View, TouchableOpacity, Image, ScrollView, Text} from 'react-native';
import s from './styles'
import {IconButton, NativeBaseProvider, } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useUsuario } from '../Context/usuarioContext';




function DrawerMenu(props) {
  return (
    <TouchableOpacity onPress={props.navigation}>
      <View style={s.menuContainer}>
          <Icon name={props.iconName} color="#506048"  size={20}/>
        <View style={s.tituloContainer}>
          <Text style={s.tituloTxt}>{props.titleName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

let Menu= (props) => {
  const { usuario, logOut } = useUsuario();

  salir = () =>{
    logOut()
  }

  return (
    <NativeBaseProvider>
      <View style={{flex:0.09, flexDirection:'row', justifyContent:'flex-end', backgroundColor:"#506048"}}>
      <IconButton icon={<Icon name='close' color="white" size={25}/>}  onPress={()=> props.navigation.closeDrawer()}/>
      </View>      
    <View style={s.container}>
      <View style={s.bgContainer}>

        <TouchableOpacity>
          <View style={s.userContainer}>
            <Image style={s.userImagen} source={require('../images/ban1.png')} />
            
          </View>
          <View style={s.userNombre}>
            <Text style={s.userTitulo}> {usuario.username}</Text>
            <Text style={s.userSubTitulo}> {usuario.role==1? "Comprador": "Vendedor"} </Text>
          </View>
        </TouchableOpacity>
      </View>
    
      <ScrollView style={{flex:0.09}}>  
      <View style={s.sepCategorias}>
        <Text style={s.Textsep}>Categorías</Text>
      </View>


      <DrawerMenu iconName='home' titleName='Inicio' navigation={() => props.navigation.navigate('Home')} />
      <DrawerMenu iconName='suitcase' titleName='Ropa' navigation={() => props.navigation.navigate('Perfil')} />
      <DrawerMenu iconName='desktop' titleName='Tecnología' navigation={() => props.navigation.navigate('Login')} />
      <DrawerMenu iconName='cutlery' titleName='Comida' navigation={() => props.navigation.navigate('Perfil')} />
      <DrawerMenu iconName='bath' titleName='Hogar' navigation={() => props.navigation.navigate('Perfil')} />
      <DrawerMenu iconName='eyedropper' titleName='Maquillaje' navigation={() => props.navigation.navigate('Perfil')} />
      <DrawerMenu iconName='rocket' titleName='Otros' navigation={() => props.navigation.navigate('Perfil')} />
      
      <View style={s.sepCategorias}>
        <Text style={s.Textsep}>Configuración</Text>
      </View>

      
      <DrawerMenu iconName='user' titleName='Perfil' navigation={() => props.navigation.navigate('Home')} />
      <DrawerMenu iconName='cog' titleName='Configuración' navigation={() => props.navigation.navigate('Perfil')} />
      <DrawerMenu iconName='exclamation-circle' titleName='Reportar' navigation={() => props.navigation.navigate('Perfil')} />
      
      <View style={s.sepCategorias}>
        <Text style={s.Textsep}>Más</Text>
      </View>

      <DrawerMenu iconName='users' titleName='Equipo de desarrollo' navigation={() => props.navigation.navigate('Home')} />
      <DrawerMenu iconName='comments' titleName='Contactanos' navigation={() => props.navigation.navigate('Perfil')} />
      <DrawerMenu iconName='question' titleName='¿Qué hacemos?' navigation={() => props.navigation.navigate('Perfil')} />

      <TouchableOpacity onPress={salir}>
        <View style={s.btnSignOut}>
            <Icon name="sign-out" color="white"  size={20}/>
            <View >
              <Text style={s.tituloOut}>Cerrar Sesión</Text>
            </View>
        </View>
    </TouchableOpacity>
    
    </ScrollView>
    </View>
        </NativeBaseProvider>
  )
}





export default Menu
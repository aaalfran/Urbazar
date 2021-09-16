import * as React from 'react';
import { View, TouchableOpacity, Image, ScrollView, Text} from 'react-native';
import s from './styles'
import {IconButton, NativeBaseProvider, } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useUsuario } from '../Context/usuarioContext';
import {storeCategoria} from "../Context/categoriaContext";



function DrawerMenu(props) {
  return (
    <TouchableOpacity onPress={()=> ChangeCategorieAndNavigate(props)}>
      <View style={s.menuContainer}>
          <Icon name={props.iconName} color="#02023d"  size={20}/>
        <View style={s.tituloContainer}>
          <Text style={s.tituloTxt}>{props.titleName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

function ChangeCategorieAndNavigate(props){
  storeCategoria(props.categorieNro).then((res)=>{
    props.navigation.navigate(props.page);

  })
  
}

let Menu= (props) => {
  const { usuario, logOut } = useUsuario();

  salir = () =>{
    logOut()
  }

  return (
    <NativeBaseProvider>
      <View style={{flex:0.09, flexDirection:'row', justifyContent:'space-between', backgroundColor:"#02023d", alignItems:"center"}}>
        <Text style={{color:"white", fontSize:25, marginLeft:15}}>Menu</Text>
        <IconButton icon={<Icon name='close' color="white" size={25}/>}  onPress={()=> props.navigation.closeDrawer()}/>
      </View>      
    <View style={s.container}>
      <View>
        <TouchableOpacity style={s.bgContainer}>
          <View style={s.userContainer}>
            <Image style={s.userImagen} source={require('../images/ban1.png')} />
            
          </View>
          <View style={s.userNombre}>
            <Text style={s.userTitulo}> {"UserTest"}</Text>
            <Text style={s.userSubTitulo}> {usuario.role==1? "Comprador": "Vendedor"} </Text>
          </View>
        </TouchableOpacity>
      </View>
    
      <ScrollView style={{flex:0.09}}>  
      <View style={s.sepCategorias}>
        <Text style={s.Textsep}>Categorías</Text>
      </View>


      <DrawerMenu iconName='home' titleName='Inicio' navigation= {props.navigation} categorieNro="0" page="Home"/>
      <DrawerMenu iconName='suitcase' titleName='Ropa' navigation= {props.navigation} categorieNro="1" page="Filtro/1"/>
      <DrawerMenu iconName='desktop' titleName='Tecnología' navigation= {props.navigation} categorieNro="2" page="Filtro/2" />
      <DrawerMenu iconName='cutlery' titleName='Comida' navigation= {props.navigation} categorieNro="3" page="Filtro/3"/>
      <DrawerMenu iconName='bath' titleName='Hogar' navigation= {props.navigation} categorieNro="4" page="Filtro/4"/>
      <DrawerMenu iconName='eyedropper' titleName='Maquillaje' navigation= {props.navigation} categorieNro="5" page="Filtro/5" />
      <DrawerMenu iconName='rocket' titleName='Otros' navigation= {props.navigation} categorieNro="1" page="Filtro/1"/>
      
      <View style={s.sepCategorias}>
        <Text style={s.Textsep}>Configuración</Text>
      </View>

      
      <DrawerMenu iconName='user' titleName='Perfil' navigation= {props.navigation} categorieNro="0" page="Perfil" />
      <DrawerMenu iconName='cog' titleName='Configuración' navigation= {props.navigation} categorieNro="0" page="Perfil"  />
      <DrawerMenu iconName='exclamation-circle' titleName='Reportar' navigation= {props.navigation} categorieNro="0" page="Perfil" />
      
      <View style={s.sepCategorias}>
        <Text style={s.Textsep}>Más</Text>
      </View>

      <DrawerMenu iconName='users' titleName='Equipo de desarrollo' navigation= {props.navigation} categorieNro="0" page="Perfil" />
      <DrawerMenu iconName='comments' titleName='Contactanos' navigation= {props.navigation} categorieNro="0" page="Perfil" />
      <DrawerMenu iconName='question' titleName='¿Qué hacemos?' navigation= {props.navigation} categorieNro="0" page="Perfil" />

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
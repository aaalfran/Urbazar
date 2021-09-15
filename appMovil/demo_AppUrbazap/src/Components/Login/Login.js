import React from 'react';
import { View, Text,TouchableOpacity, Image, KeyboardAvoidingView, Platform } from "react-native"
import {NativeBaseProvider, StatusBar, Input, Button } from 'native-base'
import styles from "./styles.js";
import Icon from 'react-native-vector-icons/FontAwesome'
import { useUsuario } from '../../Context/usuarioContext';

function Login( {navigation} ){
    const [show, setShow] = React.useState(false)
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const { login } = useUsuario();

    const ingresar = () =>{
        data = {username, password}
        login(data)
    }

    const handleClick = () => setShow(!show)

    return(
        <NativeBaseProvider>
        <KeyboardAvoidingView
            behavior={Platform.OS === "android" ? "height" : "position"}
            style={{flex: 1}}
        >
        <View style={{height:"100%", backgroundColor: '#ffffff'}}>
            <StatusBar backgroundColor="#02023d" barStyle="light-content" />
            <View className="header_login" style={styles.header} >
            </View>

            <View style={styles.cont_gral}>
                <Image style={styles.logo} source={require('../../images/logo_v2.png')}/>
                <Text style={styles.subtitle}> ¡Todo lo que buscas más cerca que nunca! </Text>
                <View style={styles.contenido}>
                    <View style={styles.info_box}>
                        <Input   
                            placeholder="Usuario"
                            _light={{ placeholderTextColor: "blueGray.400", }}
                            _dark={{ placeholderTextColor: "blueGray.50",}}
                            style={{marginBottom: 10}}
                            onChangeText={text => setUsername(text)}
                            defaultValue={username}
                        />

                        <Input 
                            type={show ? "text" : "password"} 
                            InputRightElement={
                                <Icon 
                                    name={show ? "eye" : "eye-slash"} 
                                    color="#E6E6E6" size={25} 
                                    onPress={handleClick} 
                                    style={{marginRight:10}}
                                />}
                            placeholder="Contraseña"
                            onChangeText={text => setPassword(text)}
                        />
                    </View>

                    <View>
                        <Button backgroundColor="#02023d"  onPress={ingresar}>Iniciar sesión</Button>
                    </View>
                    
                
                </View>

            </View>
            
            <TouchableOpacity  style={styles.footer}  onPress={()=> navigation.navigate('Registro')}>
                <Text style={styles.letraFooter}>¿No tienes una cuenta? </Text>
                <Text style={styles.signup}> Regístrate</Text>
            </TouchableOpacity>
            
            <View className="Decoradores" style={styles.decorator}/>
            <View className="Decoradores" style={styles.decorator2}/>
           
        </View>
        </KeyboardAvoidingView>
        </NativeBaseProvider>
    )
}


export default Login;
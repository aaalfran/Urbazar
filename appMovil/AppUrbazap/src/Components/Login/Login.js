import React from 'react';
import { View, ScrollView, Dimensions, Text, Image, TouchableHighlight, TouchableOpacity } from "react-native"
import {NativeBaseProvider, StatusBar, Input, Button, IconButton} from 'native-base'
import styles from "./styles.js";
import Icon from 'react-native-vector-icons/FontAwesome'
import { useUsuario } from '../../Context/usuarioContext';
import { useDrawerStatus } from '@react-navigation/drawer';

function Login( {navigation} ){
    const [show, setShow] = React.useState(false)
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    
    

    const { login } = useUsuario();

    const ingresar = () =>{
        let data = { username, password}
        login(data)
    }

    const handleClick = () => setShow(!show)

    

    return(
        <NativeBaseProvider>
        <View style={{height:"100%"}}>
            <StatusBar backgroundColor="#02023d" barStyle="light-content" />
            <View className="header_login" style={styles.header} >
            </View>

            <View style={styles.cont_gral}>
                <Text style={styles.title}> UrbazApp </Text>
                <Text style={styles.subtitle}> ¡Todo lo que buscas más cerca que nunca! </Text>
                <View style={styles.contenido}>
                    <View style={styles.info_box}>
                        <Input   placeholder="Usuario"
                        _light={{ placeholderTextColor: "blueGray.400", }}
                        _dark={{ placeholderTextColor: "blueGray.50",}}
                        style={{marginBottom:"10%"}}
                        onChangeText={text => setUsername(text)}
                        defaultValue={username}
                        />

                        <Input type={show ? "text" : "password"} InputRightElement={
                                
                                <Icon name={show ? "eye" : "eye-slash"} color="#E6E6E6" size={25} onPress={handleClick} style={{marginRight:"3%"}}/>
                                
                                
                            }
                            placeholder="Contraseña"
                            onChangeText={text => setPassword(text)}
                            />
                    </View>

                    <View>
                        <Button backgroundColor="#f4733e"  onPress={ingresar}>Iniciar sesión</Button>
                    </View>
                    
                
                </View>

            </View>
            
            <TouchableOpacity  style={styles.footer}  onPress={()=> navigation.navigate('Registro')}>
                    <Text style={styles.letraFooter}>¿No tienes una cuenta? </Text>
                    <Text style={{color:"#B06058"}}> Registrate</Text>
                
                </TouchableOpacity>
            
           
        </View>
        </NativeBaseProvider>

    )
}


export default Login;
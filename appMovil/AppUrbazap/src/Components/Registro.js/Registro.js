import React, {useState} from "react";
import { View, ScrollView, Text } from "react-native"
import {
    NativeBaseProvider,
    StatusBar, Input,
    Button, Select,
    CheckIcon, Stack,
    HStack, Center,
    IconButton
} from 'native-base'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import PaymentComponent from "../Payment/PaymentComponent";
import {validarCodigo} from "./RegistroPC";

function getEdades() {
    let ages = []
    for (let i = 12; i < 100; i++) {
        ages.push(i.toString())
    }
    return ages
}

const Register= ( props) => {
    const [form, setForm] = useState({
        nombre: "",
        genero:"",
        edad:0,
        identificacion: "",
        telefono: "",
        correo: "",
        username: "",
        password: "",
        password2: "",
        nro_tarjeta: "",
        fecha_tarjeta: "",
        cvc_tarjeta: "",
        codigoF: ""
      })



    const handleChangeForm = (e) =>{
        setForm({
            ...form, [e.target.name]: e.target.value
          
        })
        console.log(e.target.name)
        console.log(e.target.value)

        console.log("si")
        
      }
    const edades = getEdades()

    return (
        <NativeBaseProvider>
            <View >
                <StatusBar backgroundColor="#506048" barStyle="light-content" />
                <View style={styles.header} >
                    <HStack space={0} alignItems="center">
                        <IconButton
                            icon={<Icon name="chevron-left" color="#506048" size={25} style={{ marginRight: 0 }} />} 
                            style={{ marginRight: 0 }}
                            onPress={()=>props.navigation.navigate("Login")}
                        />
                        <View>
                            <Text style={styles.title}> UrbazApp </Text>
                            <Text style={styles.subtitle}> ¡Todo lo que buscas más cerca que nunca! </Text>
                        </View>
                    </HStack>
                    
                    <View className="Decoradores" style={styles.decorator} />
                    <View className="Decoradores" style={styles.decorator2} />
                </View>

                <ScrollView stickyHeaderIndices={[1]} >
                    <Stack space={3} alignItems="center" style={{ marginBottom: "50%" }}>
                        {/* Nombre Completo*/}
                        <Center style={{ width: "90%" }}  >
                            <Input 
                                placeholder="Nombre Completo"
                                style={{ width: "100%" }}
                                InputLeftElement={
                                    <Icon name="user" color="#DADADA" size={25} style={{ marginLeft: "3%" }} />
                                }
                                name="nombre"                                
                                onChange={handleChangeForm }
                            />
                        </Center>

                        {/* Inputs alineados horizontalmente */}
                        <HStack space={3} alignItems="center">
                            {/**Género */}
                            <Center style={{ width: "43%" }}  >
                                <Select
                                    minWidth="100%"
                                    InputLeftElement={<Icon name="venus-mars" color="#DADADA" size={25} style={{ marginLeft: "3%" }} />}
                                    placeholder="Género"
                                    _selectedItem={{
                                        bg: "cyan.600",
                                        endIcon: <CheckIcon size={4} style={{ color: "#DADADA" }} />,
                                    }}
                                    
                                name="genero"
                                onChange={handleChangeForm} 
                                    >

                                    <Select.Item label="Masculino" value="Masculino" />
                                    <Select.Item label="Femenino" value="Femenino" />
                                    <Select.Item label="Otro" value="Otro" />
                                </Select>
                            </Center>
                            {/*Edad*/}
                            <Center style={{ width: "43%" }}  >
                                <Select
                                    minWidth="100%"
                                    InputLeftElement={
                                        <Icon name="sort-numeric-desc" color="#DADADA" size={25} style={{ marginLeft: "3%" }} />
                                    }
                                    placeholder="Edad"
                                    _selectedItem={{
                                        bg: "cyan.600",
                                        endIcon: <CheckIcon size={4} style={{ color: "#DADADA" }} />,
                                    }}
                                    
                                name="edad"
                                onChange={handleChangeForm} 
                                >

                                    {edades.map(edad => (
                                        <Select.Item key={edad} label={edad} value={edad} />
                                    ))}


                                </Select>
                            </Center>
                        </HStack>

                        <View style={styles.divider} />

                        {/**Identificación */}

                        <Center style={{ width: "90%" }}  >
                            <Input variant="outline"
                                placeholder="Identificación"
                                style={{ width: "100%" }}
                                InputLeftElement={
                                    <Icon name="id-card-o" color="#DADADA" size={25} style={{ marginLeft: "3%" }} />
                                }
                                name="identificacion"
                                onChange={handleChangeForm} 
                            />
                        </Center>

                        {/**Teléfono */}
                        <Center style={{ width: "90%" }}  >
                            <Input variant="outline"
                                placeholder="Teléfono"
                                style={{ width: "100%" }}
                                InputLeftElement={
                                    <Icon name="phone" color="#DADADA" size={25} style={{ marginLeft: "3%" }} />
                                }
                                name="telefono"
                                onChange={handleChangeForm} 
                            />
                        </Center>

                        {/**Correo */}
                        <Center style={{ width: "90%" }}  >
                            <Input variant="outline"
                                placeholder="Correo"
                                style={{ width: "100%" }}
                                InputLeftElement={
                                    <Icon name="envelope" color="#DADADA" size={25} style={{ marginLeft: "3%" }} />
                                }
                                name="correo"
                                onChange={handleChangeForm} 
                            />
                        </Center>

                        <View style={styles.divider} />

                        <Center style={{ width: "90%" }}  >
                            <Input variant="outline"
                                placeholder="Nombre de usuario"
                                style={{ width: "100%" }}
                                InputLeftElement={
                                    <Icon name="user" color="#DADADA" size={25} style={{ marginLeft: "3%" }} />
                                }
                                
                                name="username"
                                onChange={handleChangeForm} 
                            />
                        </Center>

                        <HStack space={3} alignItems="center">
                            {/**Password */}
                            <Center style={{ width: "43%" }}  >
                                <Input
                                    placeholder="Contraseña"
                                    style={{ width: "100%" }}
                                    InputLeftElement={
                                        <Icon name="key" color="#DADADA" size={25} style={{ marginLeft: "3%" }} />
                                    }
                                    name="password"
                                    onChange={handleChangeForm} 
                                />
                            </Center>
                            {/*Password*/}
                            <Center style={{ width: "43%" }}  >
                                <Input
                                    placeholder="Confirmar"
                                    style={{ width: "100%" }}
                                    InputLeftElement={
                                        <Icon name="key" color="#DADADA" size={25} style={{ marginLeft: "3%" }} />
                                    }
                                    name="password2"
                                    onChange={handleChangeForm} 
                                />
                            </Center>
                        </HStack>


                        <View style={styles.divider} />

                        <Center style={{ width: "90%" }}>
                            <PaymentComponent />
                        </Center>
                        <View style={styles.divider} />
                        {/**Código familiar */}
                        <Center style={{ width: "90%" }}  >
                            <Input
                                placeholder="Código Familiar"
                                style={{ width: "100%" }}
                                InputLeftElement={
                                    <Icon name="users" color="#DADADA" size={25} style={{ marginLeft: "3%" }} />
                                }
                                name="codigoF"
                                onChange={handleChangeForm} 
                                onBlur={()=>{validarCodigo(form)}}
                            />
                            <Text style={styles.message}>*Tu administrador de etapa debe proporcionarte este código</Text>
                        </Center>
                        <Center style={{ width: "90%" }}>

                            <Button backgroundColor="#506048" width="80%" style={{ marginTop: 10 }} >Registrarme</Button>
                        </Center>











                    </Stack>


                </ScrollView>

            </View>
        </NativeBaseProvider>
    )
}

export default Register

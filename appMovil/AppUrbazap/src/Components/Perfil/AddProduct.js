import React, { useState, useEffect } from "react";
import { View, Text, Platform, Image } from 'react-native';
import {
    NativeBaseProvider,
     Select, Input,
    Button, CheckIcon,
    VStack, TextArea,
    HStack, IconButton
} from 'native-base'
import styles from "./styles";
import Request from "../../ApiRequest/Request"
import data from "../../../enviroment"
import Icon from 'react-native-vector-icons/FontAwesome'
import * as ImagePicker from 'expo-image-picker';
import SaveImage from "./SaveImage";
import { useUsuario } from '../../Context/usuarioContext';

const AddProduct = () => {
    const categorias = Request(`http://${data.url}/categorias`)
    const { usuario } = useUsuario();

    const [image, setImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState();
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categoria, setCategoria] = useState("");

    

    const PickImage = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                alert('Permiso denegado')
            }
        }
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })
        console.log(result)
        if (!result.cancelled) {
            setImage(result.uri)
        }
    }


    return (
        <NativeBaseProvider>
            <View>
                <View style={{ marginTop: 50, marginLeft: 10 }}>
                    <Text>Subir producto</Text>

                    <View style={styles.divider} />
                </View>

                <VStack space={4} alignItems="center">


                    <View style={{ width: "90%" }}>
                        <Text>Nombre</Text>
                        <Input variant="outline"
                            style={{ width: "100%" }}
                            name="nombreProducto"
                            
                        onChangeText={text => setNombre(text)}
                        />
                    </View>

                    <View style={{ width: "90%" }}>
                        <Text>Stock</Text>
                        <Input variant="outline"
                            style={{ width: "100%" }}
                            name="Stock"
                            
                        onChangeText={text => setStock(text)}
                        />
                    </View>

                    <View style={{ width: "90%" }}>
                        <Text>Precio</Text>
                        <Input variant="outline"
                            style={{ width: "100%" }}
                            name="precio"
                            
                        onChangeText={text => setPrecio(text)}
                        />
                    </View>

                    <View style={{ width: "90%" }}>
                        <Text>Categoria</Text>
                        <Select
                            minWidth="100%"
                            _selectedItem={{
                                bg: "cyan.600",
                                endIcon: <CheckIcon size={4} style={{ color: "#DADADA" }} />,
                            }}
                            onValueChange={value => setCategoria(value)}



                            name="categoria"
                        >
                            {
                                categorias.map(categoria => (

                                    <Select.Item
                                        key={categoria.nombre}
                                        label={categoria.nombre}
                                        value={categoria.id} />

                                ))

                            }

                        </Select>
                    </View>

                    <View style={{ width: "90%" }}>
                        <Text>Descripción</Text>
                        <TextArea h={20} 
                        onChangeText={text => setDescripcion(text)}
                        
                     />
                    </View>

                </VStack>

                <HStack space={3} style={{ marginTop: "10%", marginBottom: "10%", justifyContent: "center" }}>
                    <IconButton
                        style={{ height: 100, width: 100, borderColor: "#7a7a7a" }}
                        onPress={PickImage}
                        variant="outline"
                        icon={<Icon name="picture-o" color="#7a7a7a" size={50} />} />

                    {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
                </HStack>



                <View alignItems="center">
                    <Button backgroundColor="#f4733e" onPress={() => SaveImage(image,usuario.id, categoria,nombre,precio,descripcion,stock)} style={{ paddingLeft: "10%", paddingRight: "10%", width: "70%" }}>
                        Subir producto
                    </Button>
                </View>



            </View>
        </NativeBaseProvider>
    )
}

export default AddProduct;
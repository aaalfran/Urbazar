import React, { useState, useEffect } from 'react';
import NavBar from '../navBar/NavigationBar';
import { View, Text, FlatList, Image, } from 'react-native';
import { NativeBaseProvider } from "native-base";
import CategoriesBar from '../navBar/CategoriesBar';
import styles from "../Main/styles";

function _renderItem({ item, index }) {
    return (
        <View style={styles.boxProduct}>
            <Image source={{ uri: item.source }} style={{
                height: 150, width: 150
            }}
            />
            <View style={{ marginTop: 1, borderWidth: 0.5, borderColor: "#e6e6e6" }} />
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 20 }}>{item.nombre}</Text>
                <Text> ${item.precio}</Text>
            </View>
        </View>
    )
}

const SearchBar = (props) => {
    const [filtro, setFiltro] = useState([]);
    const { data1 } = props.route.params;

    const [data2, settext1] = useState('');

    const productos = [
        {
            "id": 1,
            "idVendedor": 2,
            "ID_Categoria": "1",
            "nombre": "zapatos",
            "precio": 23,
            "activo": 1,
            "descripcion": "zapatos de vestir ",
            "stock": 20,
            "promedioPuntuacion": 4,
            "pedidoAnticipado": 1,
            "source": "https://vasari.vteximg.com.br/arquivos/ids/193038-500-500/VZC171644-NG-38.jpg?v=637302896491870000"
        },
        {
            "id": 2,
            "idVendedor": 2,
            "ID_Categoria": "1",
            "nombre": "camisa ",
            "precio": 20,
            "activo": 1,
            "descripcion": "camisa de vestir",
            "stock": 7,
            "promedioPuntuacion": 4,
            "pedidoAnticipado": 1,
            "source": "https://http2.mlstatic.com/D_NQ_NP_914407-MEC46107098824_052021-O.jpg"
        },
        {
            "id": 3,
            "idVendedor": 4,
            "ID_Categoria": "2",
            "nombre": "computadora ",
            "precio": 500,
            "activo": 1,
            "descripcion": "computadora lenovo",
            "stock": 100,
            "promedioPuntuacion": 5,
            "pedidoAnticipado": 1,
            "source": "https://www.idcmayoristas.com/wp-content/uploads/2020/04/002589.jpg"
        },
        {
            "id": 4,
            "idVendedor": 6,
            "ID_Categoria": "2",
            "nombre": "iphone",
            "precio": 5,
            "activo": 1,
            "descripcion": "celular phone 10 ",
            "stock": 20,
            "promedioPuntuacion": 5,
            "pedidoAnticipado": 1,
            "source": "https://images-na.ssl-images-amazon.com/images/I/61ceSVoz1nL._AC_SX385_.jpg"
        },
        {
            "id": 5,
            "idVendedor": 8,
            "ID_Categoria": "4",
            "nombre": "alcohol",
            "precio": 2,
            "activo": 1,
            "descripcion": "alcohol antiseptico",
            "stock": 200,
            "promedioPuntuacion": 5,
            "pedidoAnticipado": 1,
            "source": "https://www.gloriasaltos.com/wp-content/uploads/2020/07/132786A.jpg"
        }
    ]

    useEffect(() => {
        
        fetchPosts();

    }, [data1])

    const fetchPosts = () => {

        settext1(data1);
        const dataFin = data1.toLowerCase().trim();
        const resp = productos.filter( producto => producto.nombre.includes(dataFin) );
        setFiltro(resp);

    }
    return (
        <>
            <NativeBaseProvider>
                <NavBar navigation={props.navigation} />
                <CategoriesBar navigation={props.navigation}/>
                <View style={{ flex: 19 }}>
                    <View>
                        <FlatList
                            data={filtro}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={_renderItem}
                        />
                    </View>
                </View>
            </NativeBaseProvider>
        </>
    );
}

export default SearchBar;

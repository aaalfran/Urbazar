import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from "./styles";
import Carousel from 'react-native-snap-carousel';

function CardProduct(props) {
    const [activeIndex, setActiveIndex] = useState(0)
    const navigation = props.navigation.navigation

    const carouselItems = [
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
    
    return (
        <>
            <View style={styles.contenido}>
                <Text style={styles.headers}>{props.nameSection}</Text>
            </View>

            <View style={{ borderBottomColor: 'gray', borderBottomWidth: 0.5, }} />

            <View style={styles.cont_Carrusel}>

                {/**Items */}
                <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'center', }}>
                    <Carousel
                        layout={"default"}
                        data={carouselItems}
                        sliderWidth={200}
                        itemWidth={200}
                        renderItem={({item, index}) => (
                            <TouchableOpacity
                                key={item.id} 
                                onPress={() => navigation.navigate('DetailProduct', {key: item.id, item: item})} 
                                style={styles.boxProduct}
                            > 
                                <Image source= {{uri: item.source }} style={{width: 150, height: 150}}/>
                                <View style={{marginTop:1, borderWidth:0.5, borderColor:"#e6e6e6",borderRadius: 10}}/>
                                <View style={{ marginLeft: 10 }}>
                                    <Text adjustsFontSizeToFit style={{fontSize: 20, color: "#02023d", fontWeight: "bold"}}>{item.nombre}</Text>
                                    <Text adjustsFontSizeToFit style={{fontSize: 20, color: "#f4733e"}}>${item.precio}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        onSnapToItem = {index => setActiveIndex(index)}  />
                </View>

            </View>
        </>
    )

}

export default CardProduct
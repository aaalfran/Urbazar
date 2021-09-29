import React, { useState, useEffect } from 'react'
import NavBar from '../navBar/NavigationBar';
import { View, Text, Button, Image, ScrollView, Dimensions, Alert } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { NativeBaseProvider } from "native-base";
import styles from "../Main/styles";
import { LoadStars } from './LoadResourcesProducts';
import { useUsuario } from '../../Context/usuarioContext';

const mostrarAlerta = () => {
  Alert.alert(
    "Añadir al carrito",
    "Producto añadido exitosamente",
    [
      { text: "OK", onPress: () => 
      console.log("producto anadido") }
    ]
  );
}

const Detail = (props) => {

    const {carrito, agregarProducto} = useUsuario();
    const [producto, setProducto] = useState(props.route.params.item);
    const [cantidad, setCantidad] = useState(1)
    const [total, setTotal] = useState(producto.precio)
    const [activeIndex, setActiveIndex] = useState(0)
    const [carouselItems, setCarouselItems] = useState([{
        "id": 0,
        "id_producto": 0, 
        "source": "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg"
    }])

    const cargaProductos = props.navigation.addListener('focus', () => {
      setProducto(props.route.params.item)
      setActiveIndex(0)       
    })

    const agregarCarrito = () => {

      const p = {"key": Math.floor(Math.random() * 1000), "producto" : producto, "cantidad" : cantidad, "total" : total};
      agregarProducto(p);
      mostrarAlerta();
      console.log("Agregando...");
    }
    
    useEffect(() => {

      const productosSources = [
        {
            "id": 1,
            "id_producto": 1,
            "source": "https://vasari.vteximg.com.br/arquivos/ids/193038-500-500/VZC171644-NG-38.jpg?v=637302896491870000"
        },
        {
            "id": 2,
            "id_producto": 1,
            "source": "https://http2.mlstatic.com/D_NQ_NP_697199-MEC44983042563_022021-W.jpg"
        },
        {
            "id": 3,
            "id_producto": 1,
            "source": "https://i.pinimg.com/originals/19/f5/2c/19f52c5e499016adbffe02b729b5309e.jpg"
        },
        {
            "id": 4,
            "id_producto": 2,
            "source": "https://bassil.com.ec/4653/camisa-amarilla-manga-corta-barcelona-sporting-club.jpg"
        },
        {
            "id": 5,
            "id_producto": 2,
            "source": "https://todosobrecamisetas.com/wp-content/uploads/camiseta-barcelona-sc-200-anios-guayaquil-2.jpg"
        },
        {
            "id": 6,
            "id_producto": 2,
            "source": "https://bassil.com.ec/3168/camisa-amarilla-manga-corta-barcelona-sporting-club.jpg"
        },
        {
            "id": 7,
            "id_producto": 3,
            "source": "https://www.idcmayoristas.com/wp-content/uploads/2020/04/002589.jpg"
        },
        {
            "id": 8,
            "id_producto": 3,
            "source": "https://images-na.ssl-images-amazon.com/images/I/61gn5whRfNL._SL1000_.jpg"
        },
        {
            "id": 9,
            "id_producto": 3,
            "source": "https://1700digital.com/wp-content/uploads/lenovo-s340gamer2.jpg"
        },
        {
            "id": 10,
            "id_producto": 4,
            "source": "https://images-na.ssl-images-amazon.com/images/I/61ceSVoz1nL._AC_SX385_.jpg"
        },
        {
            "id": 11,
            "id_producto": 4,
            "source": "https://i1.wp.com/hipertextual.com/wp-content/uploads/2019/09/hipertextual-iphone-11-2019772090.jpeg?fit=1200%2C788&ssl=1"
        },
        {
            "id": 12,
            "id_producto": 4,
            "source": "https://www.muycomputer.com/wp-content/uploads/2020/10/iPhone-12.jpg"
        },
        {
            "id": 13,
            "id_producto": 5,
            "source": "https://gontec.com.ec/wp-content/uploads/2020/05/alcohol_anti.png"
        },
        {
            "id": 14,
            "id_producto": 5,
            "source": "https://http2.mlstatic.com/D_NQ_NP_608422-MEC43308746534_082020-O.jpg"
        }
    ];
    
      const resp = productosSources.filter( p => p.id_producto === producto.id);

      setCarouselItems(resp);
      setCantidad(1)
      setTotal(producto.precio)
      
    }, [producto])

  
    const aumentarCantidad = () => { 
        if (cantidad < producto.stock) {
            setTotal(producto.precio * (cantidad + 1))
            setCantidad(cantidad + 1)
        }
        
    }
    const disminuirCantidad = () => {
        if (cantidad > 1) {
            setTotal(producto.precio * (cantidad - 1))
            setCantidad(cantidad - 1)
        }
    }

    return(
        <NativeBaseProvider>
            <NavBar navigation={props.navigation}/>
            <View style={{flex:1000, backgroundColor: "#ffffff"}}>
                <ScrollView>
                    <View style={styles.contenido}>
                        <View>  
                            <Text style={styles.producto_titulo}>{producto.nombre}</Text>
                            <View style={styles.line}></View>
                        </View> 
                        <View style={{ marginTop:10, flexDirection:'row', justifyContent: 'center'}}>
                            {/* seccion imagenes */}
                            <Carousel
                                layout={"default"}
                                data={carouselItems}
                                sliderWidth={300}
                                itemWidth={Dimensions.get('window').width}
                                renderItem={({item, index}) => (
                                    <Image  
                                        source={{uri: item.source}} 
                                        style={{ width: Dimensions.get('window').width, height: 250}}
                                        key={index.toString()}
                                    />
                                )}
                                onSnapToItem = { index => setActiveIndex(index)}
                            />
                        </View>
                        <View> 
                            <View style={styles.producto_compra}>
                                <View style={{width: "50%"}}>
                                    <Text style={styles.producto_vendedor_titulo}>Vendedor</Text>
                                    <Text style={styles.producto_texto}>Andrea Rodriguez</Text>
                                </View>
                                <View style={{width: "50%"}}> 
                                    <Text style={styles.producto_vendedor_titulo}>Calificación</Text>
                                    <LoadStars 
                                        estrellas={producto.promedioPuntuacion} 
                                    />
                                </View>
                            </View>
                            <Text style={styles.producto_vendedor_titulo}>Descripción</Text>
                            <Text style={styles.producto_texto}>{producto.descripcion}</Text>
                            <View style={styles.producto_dist}>
                                <Text style={styles.producto_texto_dist}>Distancia</Text>
                                <Text style={styles.producto_etapa}>{producto.id} {producto.id == 1 ? "Etapa" : "Etapas"}</Text>
                            </View>
                            <View style={styles.line}></View>
                            <View style={{marginTop: 10}}>
                                <Text style={styles.producto_vendedor_titulo}>Comentarios</Text>
                                {/* Comentarios */}
                                <View style={{flexDirection: "row", width:"85%", alignSelf:"center", marginTop: 10, marginBottom: 10}}>
                                    <Image source= {{uri: "https://cdn.iconscout.com/icon/free/png-512/batman-1417681-1197293.png"}} style={{height: 50, width:50}}/>
                                    <View style={{marginLeft: 10}}>
                                        <Text style={{
                                            fontWeight: "bold", 
                                            fontSize: 19
                                        }}>
                                                Michel Michel
                                        </Text>
                                        <Text style={{fontSize: 19}}>Buen producto</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{marginTop: 20}}>
                                    {/* Precio y cantidad */}
                                    <View  style={styles.producto_compra}>
                                        {/* Parte izquierda (etiquetas) */}
                                        <View style={styles.producto_compra_etiqueta}>
                                            <Text style={{fontSize: 19, fontWeight: "bold"}}>Precio</Text>
                                            <Text style={{fontSize: 19, fontWeight: "bold", marginTop: 15, marginBottom: 5}}>Cantidad</Text>
                                            <View style={styles.line}></View>
                                            <Text style={{fontSize: 19, fontWeight: "bold", marginTop: 7}}>Total</Text>
                                        </View>
                                        {/* Parte derecha (valores) */}
                                        <View style={styles.producto_compra_valores}>
                                            <Text style={styles.producto_texto}>$ {producto.precio}</Text>
                                            {/* Seleccionar cantidad */}
                                            <View style={{flexDirection: "row", marginBottom: 4, marginTop: 6}}> 
                                                <Button 
                                                    onPress={() => aumentarCantidad()}
                                                    title="  +   "
                                                    color="#02023d"
                                                />

                                                <Text style={styles.boton_compra}>  {cantidad}  </Text>
                                                <Button 
                                                    onPress={() => disminuirCantidad()}
                                                    title="   -   "
                                                    color="#02023d"
                                                />
                                            </View>
                                            <View style={styles.line}></View>
                                            <Text style={{fontSize: 19, fontWeight: "bold", marginTop: 8}}>$ {total}</Text>
                                        </View>
                                    </View>
                                    {/* Boton agregar al carrito */}
                                    <View style={{marginTop: 20, width: "70%", alignSelf: "center", marginTop: 50}}>
                                        <Button 
                                            onPress={() => {
                                                agregarCarrito()
                                            }}
                                            title="Agregar a carrito"
                                            color="#f4733e"
                                        />
                                    </View>
                                </View>
                                {/* información importe */}
{/*                                 <View>
                                    <Text>Información importe</Text>
                                </View> */}
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

        </NativeBaseProvider>
    )
}

export default Detail



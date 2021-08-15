import React, { useState, useEffect } from 'react'
import NavBar from '../navBar/NavigationBar';
import { View, Text, Button, Image, ScrollView, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { NativeBaseProvider } from "native-base";
import CategoriesBar from '../navBar/CategoriesBar';
import styles from "../Main/styles";
import axios from 'axios';
import { LoadStars } from './LoadResourcesProducts';
import Swal from 'react-native-sweet-alert';

let agregarCarrito = (id_producto,cantidad) => {
    axios.get(`http://${data.number}/clientes/persona/${6}`).then(res => {
      let dato = res.data[0];
      axios.post(`http://${data.number}/carrito`,{
        "id": dato.idPersona,
        "idUsuario": dato.id,
    }).then(() => {
      console.log("Carrito Creado Exitosamente")
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      axios.get(`http://${data.number}/carrito/cliente/${res.data[0].id}`).then(res => {
        let dato = res.data[0];
        axios.get(`http://${data.number}/detalle-carrito/carrito/${dato.id}`).then(res => {
          let respuesta = res.data;
          console.log(respuesta)
          let isRespuesta = true;
          if(respuesta.length > 0) {
            for(let detalle of respuesta){
              console.log(detalle)
              if(detalle.idProducto === parseInt(id_producto)){
                isRespuesta = false;
                let pload = detalle;
                pload.cantidad = cantidad;
                axios.put(`http://${data.number}/detalle-carrito/${detalle.idDetalle}`,pload).then(() =>{
                  console.log("success update")
                  setLoad(true);
                  Swal.fire(
                    'Producto agregado al carrito exitosamente',
                    `cantidad: ${cantidad}`,
                    'success'
                  )
                }).then(() => {
                  window.location.reload()
                }).catch(err=> {
                  console.log("Error update")
                })
                break ;
              }
            }
            if(isRespuesta){
              let payload = {
                "idProducto": parseInt(id_producto),
                "cantidad": cantidad,
                "idCarrito": dato.id
              }
              axios.post(`http://${data.number}/detalle-carrito`,payload).then(res => {
                setLoad(true);
                Swal.fire(
                  'Producto agregado al carrito exitosamente',
                  `cantidad: ${cantidad}`,
                  'success'
                ).then(() => {
                  window.location.reload()
                })
              }).catch(err => {
                console.log("error xd")
              })
            }
          }
          else{
            let payload = {
              "idProducto": parseInt(id_producto),
              "cantidad": cantidad,
              "idCarrito": dato.id
            }
            console.log(payload)
            axios.post(`http://${data.number}/detalle-carrito`,payload).then(res => {
              setLoad(true);
              Swal.fire(
                'Producto agregado al carrito exitosamente',
                'success'
              )
            }).catch(err => {
              console.log("error xd")
            })
          }
  
        })
      })
    })
    })
  }

const Detail = (props) => {
    let producto = props.route.params.item
    const [cantidad, setCantidad] = useState(1)
    const [total, setTotal] = useState(producto.precio)
    const [activeIndex, setActiveIndex] = useState(0)
    const [etapaVendedor, setEtapaVendedor] = useState('')
    const [etapaCliente, setEtapaCliente] = useState('')
    const [load, setLoad] = useState(true)
    const [carouselItems, setCarouselItems] = useState([{
        "id": 0,
        "id_producto": 0, 
        "source": "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg"
    }])
    
    useEffect(() => {
        const cargaProductos = props.navigation.addListener('focus', () => {
            producto = props.route.params.item
            setCantidad(1)
            setActiveIndex(0)
            setTotal(producto.precio)
            axios.get(`http://${data.number}/sourcesproductos?filter[where][id_producto]=` + producto.id)
                .then(response => setCarouselItems(response.data))
                .catch(error => console.log('Hubo un error ' + error))
            
     })
        return cargaProductos
    }, [])
    console.log(producto.idVendedor)
    
/*     useEffect(() => {
        axios.get(`http://${data.number}/personas/` + producto.idVendedor)
          .then((response) => {
            return response.data.id_etapa
          })
          .then((idetapa) => {
            axios.get(`http://${data.number}/etapas/` + idetapa)
              .then((response) => {
                setEtapaVendedor(response.data.nombre)
                console.log("Hola")
                console.log(etapaVendedor)
              })
              .catch(error => console.log('Hubo un error ' + error))
          })
    }, []) */

/*     useEffect(() => {
        axios.get(`http://${data.number}/etapas/` + localStorage.getItem('etapa'))
          .then((response) => {
            setEtapaCliente(response.data.nombre)
          })
          .catch(error => console.log('Hubo un error ' + error))
    }, []) */

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

/*     const printImporte = () => {
        axios.get(`http://134.209.215.193:3000/matriz/1`)
          .then((response) => {
            const respuesta = JSON.parse(response.data.data)
            const posc = respuesta.vertexes.indexOf(etapaCliente)
            const posv = respuesta.vertexes.indexOf(etapaVendedor)
            setImporte(respuesta.matrix[posv][posc])
            const div = document.getElementById('info_Importe')
            div.innerHTML = `El proveedor se encuentra en la etapa "${etapaVendedor}". 
                    El importe por envío tiene un costo de $` + respuesta.matrix[posv][posc]
          })
          .catch(error=>{
              console.log(error, "Error al cargar la matriz de adyacencia");
          })
      } */
    

    return(
        <NativeBaseProvider>
            <NavBar navigation={props.navigation}/>
            <CategoriesBar/>
            <View style={{flex:21}}>
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
                            <View>
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
                                            <Text style={{fontSize: 19, fontWeight: "bold", marginTop: 10, marginBottom: 5}}>Cantidad</Text>
                                            <View style={styles.line}></View>
                                            <Text style={{fontSize: 19, fontWeight: "bold", marginTop: 7}}>Total</Text>
                                        </View>
                                        {/* Parte derecha (valores) */}
                                        <View style={styles.producto_compra_valores}>
                                            <Text style={styles.producto_texto}>$ {producto.precio}</Text>
                                            {/* Seleccionar cantidad */}
                                            <View style={{flexDirection: "row", marginBottom: 4}}> 
                                                <Button 
                                                    onPress={() => aumentarCantidad()}
                                                    title="  +   "
                                                    color="#98A0A0"
                                                />

                                                <Text style={styles.boton_compra}>  {cantidad}  </Text>
                                                <Button 
                                                    onPress={() => disminuirCantidad()}
                                                    title="   -   "
                                                    color="#98A0A0"
                                                />
                                            </View>
                                            <View style={styles.line}></View>
                                            <Text style={{fontSize: 19, fontWeight: "bold", marginTop: 8}}>$ {total}</Text>
                                        </View>
                                    </View>
                                    {/* Boton agregar al carrito */}
                                    <View style={{marginTop: 20, width: "70%", alignSelf: "center"}}>
                                        <Button 
                                            onPress={() => {
                                                console.log("agregando a carrito")
                                                agregarCarrito(producto.id, cantidad)
                                            }}
                                            title="Agregar a carrito"
                                            color="#506048"
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



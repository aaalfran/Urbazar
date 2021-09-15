import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from "./styles";
import Carousel from 'react-native-snap-carousel';
import Request from '../../ApiRequest/Request';

function CardProduct(props) {
    const [activeIndex, setActiveIndex] = useState(0)
    const navigation = props.navigation.navigation

    carouselItems = Request(props.ruta)
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
                                    <Text style={{fontSize: 20, color: "#02023d", fontWeight: "bold"}}>{item.nombre}</Text>
                                    <Text style={{fontSize: 20, color: "#f4733e"}}>${item.precio}</Text>
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
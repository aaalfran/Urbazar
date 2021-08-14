import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import styles from "./styles";
import Carousel from 'react-native-snap-carousel';
import Request from '../../ApiRequest/Request';

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

function CardProduct(props) {
    const [activeIndex, setActiveIndex] = useState(0)


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
                        renderItem={_renderItem}
                        onSnapToItem={index => setActiveIndex(index)} />
                </View>

            </View>
        </>
    )

}

export default CardProduct
import React, { useState, useEffect } from 'react';
import NavBar from '../navBar/NavigationBar';
import { View, Text, ScrollView, FlatList, Image, TextInput } from 'react-native';
import { NativeBaseProvider, Button, Spinner, Modal } from "native-base";
import CategoriesBar from '../navBar/CategoriesBar';
import { useUsuario } from '../../Context/usuarioContext';
import axios from 'axios';
import data from '../../../enviroment';
import CarritoItem from '../Carrito/CarritoItem';
import Banner from "../Main/Banner";
import filtroVista from '../Filtro/Ventanafiltro';
import styles from "../Main/styles";
import Carousel from 'react-native-snap-carousel';
import { ScreenStackHeaderSearchBarView } from 'react-native-screens';




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
    const [master, setMaster] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const { data1 } = props.route.params;

    //const [data1, settext1] = useState('zapat')

    useEffect(() => {
        fetchPosts();
        //searchfilter(data1);


    }, [])



    const searchfilter = (text) => {
        if (text) {
            const newData = master.filter((item) => {
                const itemData = item.nombre ?
                    item.nombre.toUpperCase()
                    : ''.toUpperCase();

                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFiltro(newData);
            //  setSearch(text);

        } else {
            setFiltro(master);
            // setSearch(text);

        }

    }

    const fetchPosts = () => {
        //const data1 = 'iph';
        const apiURL = `http://${data.prod}/productos`;


        fetch(apiURL)
            .then((response) => response.json())
            .then((responseJson) => {
                setFiltro(responseJson);
                setMaster(responseJson);
                /*if (data1) {
                    const newData = master.filter((item) => {

                        const itemData = item.nombre ?
                            item.nombre.toUpperCase()
                            : ''.toUpperCase();

                        const textData = data1.toUpperCase();
                        return itemData.indexOf(textData) > -1;
                    });
                    setFiltro(newData);
                    //  setSearch(text1);

                } else {
                    setFiltro(master);
                    //setSearch(text1);

                }*/

            }).then(() => searchfilter(data1)).catch((error) => {
                console.error(error);
            })


    }

    return (
        <NativeBaseProvider>


            <NavBar navigation={props.navigation} />
            <CategoriesBar />
            <View style={{ flex: 19 }}>

                {/*Banner principal */}

                <View>


                    { /*<Button onPress={() => searchfilter(data1)}> </Button>*/}

                    <FlatList
                        data={filtro}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={_renderItem}

                    />

                </View>






            </View>



        </NativeBaseProvider>
    );
}

export default SearchBar;

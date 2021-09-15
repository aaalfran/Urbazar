import React from "react";
import {  NativeBaseProvider, Text } from "native-base";
import NavBar from "../navBar/NavigationBar";
import CategoriesBar from "../navBar/CategoriesBar";
import Banner from "./Banner"
function HomeScreen({navigation}) {

    return (
        <NativeBaseProvider>
          <NavBar navigation={navigation}/>
          <CategoriesBar navigation={navigation}/>
          <Banner navigation={navigation}/>
        </NativeBaseProvider>
    );
  }
export default HomeScreen;
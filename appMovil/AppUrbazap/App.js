import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainComponent from "./src/Components/Main/Main";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <View style={styles.container}>
      <MainComponent/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8E8F0',
  },
});

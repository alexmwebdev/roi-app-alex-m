import React from "react";
import { ImageBackground, StyleSheet, Text, Image, View } from "react-native";
import { Headline, Button } from 'react-native-paper';
import { Link, BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import AddPerson from './AddPerson';

const image = { uri: "../images/roi-background.png" };
const logo = { url: "./Roilogo.png"}


// missing image <Image source={require('./images/logo_example01.png')} />
const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require('../images/roi-background.png')} resizeMode="cover" style={styles.image}>
    <Headline style={styles.headline}>Welcome to the ROI Staff Contact App!</Headline>
      <Text style={styles.text}>
          Select from the menu options below to add a new staff contact, view or edit an existing staff contact and view the departments that each staff contact is in currently.
      </Text>

      
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex:1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  text: {
    textAlign: 'left',
    color: "rgb(255,255,255)",
    marginBottom:30,
    fontFamily: "Trebuchet",
    paddingTop:50,
    fontSize: 25,
    paddingLeft:15,
    paddingRight:15

  },
  headline: {
    color: "rgb(255,255,255)",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    fontFamily: "Trebuchet",
    paddingTop:50
  }
});

export default App;
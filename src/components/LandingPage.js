import React from "react";
import { ImageBackground, StyleSheet, Text, Image, View } from "react-native";


const image = { uri: "../images/roi-background.png" };
const logo = { url: "./Roilogo.png"}
// missing image <Image source={require('./images/logo_example01.png')} />
const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require('../images/roi-background.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>
          Welcome to the ROI App!
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
    flex:4,
    color: "rgb(255,255,255)",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    fontFamily: "Trebuchet",
    paddingTop:50

  }
});

export default App;
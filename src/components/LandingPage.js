import React from "react";
import { ImageBackground, StyleSheet, Text, Image, View } from "react-native";
import { Headline, Button } from 'react-native-paper';

const image = { uri: "../images/roi-background.png" };
const logo = { url: "./Roilogo.png"}

// missing image <Image source={require('./images/logo_example01.png')} />
const App = () => (
  <View style={styles.container}>
    <Headline style={styles.headline}>Welcome</Headline>
      <Text style={styles.text}>
          Use the below navigation to view all staff contacts of ROI, add a new staff contact, view or edit an existing staff contact, view the departments that each staff contact is in currently, and keep up to date with the latest news and announcements from ROI.
      </Text>
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
    color: "rgb(38,38,38)",
    marginBottom:30,
    fontFamily: "Trebuchet",
    paddingTop:50,
    fontSize: 25,
    paddingLeft:15,
    paddingRight:15

  },
  headline: {
    color: "rgb(149,26,29)",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Trebuchet Bold",
    paddingTop:50
  }
});

export default App;
import React from "react";
import { ScrollView, ImageBackground, StyleSheet, Text, Image, View } from "react-native";
import { Headline, Button } from 'react-native-paper';

const image = { uri: "../images/roi-background.png" };
const logo = { url: "./Roilogo.png"}

// missing image <Image source={require('./images/logo_example01.png')} />
const App = () => (
  <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <Headline style={styles.headline}>News</Headline>
    <Headline style={styles.newstitle}>News Item 1</Headline>
    <Text style={styles.author}>John Smith</Text>
      <Text style={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in odio nec leo laoreet mollis. Donec tincidunt in enim a luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum nisi quis quam posuere ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur at sapien odio. Sed nec libero eu odio ultricies venenatis. Fusce dignissim libero id dolor venenatis, at faucibus nisi dignissim. Vivamus dictum porttitor elit non suscipit. Vestibulum in turpis non dui laoreet facilisis imperdiet eget odio. Aenean consequat eros a tincidunt maximus. Fusce sodales sapien in nisl dapibus, nec fermentum turpis hendrerit. Integer nulla erat, euismod vitae nisi non, dictum commodo orci. Sed est metus, mattis at odio sit amet, bibendum efficitur mauris. Nam mauris enim, feugiat et erat eu, tristique pharetra lectus. Mauris gravida pellentesque tempor.
      </Text>
    <Headline style={styles.newstitle}>News Item 2</Headline>
    <Text style={styles.author}>Sue White</Text>
      <Text style={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in odio nec leo laoreet mollis. Donec tincidunt in enim a luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum nisi quis quam posuere ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur at sapien odio. Sed nec libero eu odio ultricies venenatis. Fusce dignissim libero id dolor venenatis, at faucibus nisi dignissim. Vivamus dictum porttitor elit non suscipit. Vestibulum in turpis non dui laoreet facilisis imperdiet eget odio. Aenean consequat eros a tincidunt maximus. Fusce sodales sapien in nisl dapibus, nec fermentum turpis hendrerit. Integer nulla erat, euismod vitae nisi non, dictum commodo orci. Sed est metus, mattis at odio sit amet, bibendum efficitur mauris. Nam mauris enim, feugiat et erat eu, tristique pharetra lectus. Mauris gravida pellentesque tempor.
      </Text>
      <Headline style={styles.newstitle}>News Item 3</Headline>
        <Text style={styles.author}>Bob O'Bits</Text>
      <Text style={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in odio nec leo laoreet mollis. Donec tincidunt in enim a luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum nisi quis quam posuere ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur at sapien odio. Sed nec libero eu odio ultricies venenatis. Fusce dignissim libero id dolor venenatis, at faucibus nisi dignissim. Vivamus dictum porttitor elit non suscipit. Vestibulum in turpis non dui laoreet facilisis imperdiet eget odio. Aenean consequat eros a tincidunt maximus. Fusce sodales sapien in nisl dapibus, nec fermentum turpis hendrerit. Integer nulla erat, euismod vitae nisi non, dictum commodo orci. Sed est metus, mattis at odio sit amet, bibendum efficitur mauris. Nam mauris enim, feugiat et erat eu, tristique pharetra lectus. Mauris gravida pellentesque tempor.
      </Text>
      <Headline style={styles.newstitle}>News Item 4</Headline>
        <Text style={styles.author}>Mary Blue</Text>
      <Text style={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in odio nec leo laoreet mollis. Donec tincidunt in enim a luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum nisi quis quam posuere ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur at sapien odio. Sed nec libero eu odio ultricies venenatis. Fusce dignissim libero id dolor venenatis, at faucibus nisi dignissim. Vivamus dictum porttitor elit non suscipit. Vestibulum in turpis non dui laoreet facilisis imperdiet eget odio. Aenean consequat eros a tincidunt maximus. Fusce sodales sapien in nisl dapibus, nec fermentum turpis hendrerit. Integer nulla erat, euismod vitae nisi non, dictum commodo orci. Sed est metus, mattis at odio sit amet, bibendum efficitur mauris. Nam mauris enim, feugiat et erat eu, tristique pharetra lectus. Mauris gravida pellentesque tempor.
      </Text>
      <Headline style={styles.newstitle}>News Item 5</Headline>
        <Text style={styles.author}>Mick Green</Text>
      <Text style={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in odio nec leo laoreet mollis. Donec tincidunt in enim a luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum nisi quis quam posuere ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur at sapien odio. Sed nec libero eu odio ultricies venenatis. Fusce dignissim libero id dolor venenatis, at faucibus nisi dignissim. Vivamus dictum porttitor elit non suscipit. Vestibulum in turpis non dui laoreet facilisis imperdiet eget odio. Aenean consequat eros a tincidunt maximus. Fusce sodales sapien in nisl dapibus, nec fermentum turpis hendrerit. Integer nulla erat, euismod vitae nisi non, dictum commodo orci. Sed est metus, mattis at odio sit amet, bibendum efficitur mauris. Nam mauris enim, feugiat et erat eu, tristique pharetra lectus. Mauris gravida pellentesque tempor.
      </Text>
      </ScrollView>
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
    paddingBottom:18,
    fontSize: 18,
    paddingLeft:15,
    paddingRight:15

  },
  author: {
    textAlign: 'center',
    color: "rgb(38,38,38)",
    marginBottom:30,
    fontFamily: "Trebuchet",
    paddingTop:18,
    fontSize: 18,
    paddingLeft:15,
    paddingRight:15

  },
  headline: {
    color: "rgb(148,26,29)",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Trebuchet Bold",
    paddingTop:50
  },
  newstitle: {
    color: "rgb(38,38,38)",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Trebuchet Bold",
    paddingTop:20
  }
});

export default App;
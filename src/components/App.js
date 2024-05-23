/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image,View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/PeopleReducer';
import Navigation from './Navigation';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/*
type Props = {};
export default class App extends Component<Props> {

*/
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
      <Provider store={store}>
        <Appbar.Header style={styles.appheader}>
          <Image
          source={require('../images/roi-logo.png')}
          style={styles.imagelogo}
      />
        </Appbar.Header>
        <Navigation />
      </Provider>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c64c38',
  },
  appheader: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom:20
  },
  imagelogo: {
    width:100,
    height:57,
    marginTop:70,
    marginBottom:50,
    justifyContent: "flex-start",
    alignItems: "center"
  }
});

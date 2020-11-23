/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Button,
  Alert,
  StyleSheet,
  View,
} from 'react-native';

import Karhoo from 'react-native-karhoo-sdk';

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
    padding: 30
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
})

class App extends Component {

  configureTheSDK() {
    Karhoo.setConfiguration({
      "environment": "sandbox"
    });
  }

  login() {
    Karhoo.login("adyentest1@karhoo.com","Karhoo2020!",
    (error) => {
      Alert.alert("Login error", error, ["OK"])
    }, (message) => {
      Alert.alert("Login successful", message, ["OK"])
    });
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
        <View style={styles.space} />
          <Button
          style={styles.button}
          title="Configure the SDK"
          onPress={() => {
            this.configureTheSDK()
          }} />
          <View style={styles.space} />
          <Button
          style={styles.button}
          title="Login"
          containerViewStyle={{ marginTop: 15 }}
          onPress={() => {
            this.login()
          }} />
        </SafeAreaView>
      </>
    );
  }
}

export default App;

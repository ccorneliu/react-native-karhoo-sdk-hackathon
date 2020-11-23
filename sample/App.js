/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  Alert,
  AlertButton,
  SafeAreaView,
  StatusBar,
  Button,
} from 'react-native';

import Karhoo from 'react-native-karhoo-sdk';

class App extends Component {

  configureTheSDK() {
    Karhoo.setConfiguration({
      "environment": "sandbox"
    });
  }

  login() {
    Karhoo.login("adyentest1@karhoo.com", "Karhoo2020!", (error, message) => {
      if (error) {
        Alert.alert("Login error", error, ["OK"])
      } else {
        Alert.alert("Login notice", message, ["OK"])
      }
    });
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Button title="Configure the SDK" onPress={() => {
            this.configureTheSDK()
          }} />
          <Button title="Login" onPress={() => {
            this.login()
          }} />
        </SafeAreaView>
      </>
    );
  }
}

export default App;

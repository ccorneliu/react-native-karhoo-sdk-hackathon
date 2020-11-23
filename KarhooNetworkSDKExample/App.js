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
} from 'react-native';

import Karhoo from 'react-native-karhoo-sdk';

class App extends Component {

  configureTheSDK() {
    Karhoo.setConfiguration({
      "environment": "sandbox"
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
        </SafeAreaView>
      </>
    );
  }
}

export default App;

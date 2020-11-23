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
  SafeAreaView,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import Karhoo from 'react-native-karhoo-sdk';

class App extends Component {

  constructor(props) {
    super(props)
  }

  configureTheSDK() {
    Karhoo.setConfiguration({
      "environment": "sandbox"
    });
  }

  login() {
    const { username, password } = this.state;
    Karhoo.login(username, password, (error) => {
      Alert.alert("Login error", error, ["OK"])
    }, (message) => {
      Alert.alert("Login notice", message, ["OK"])
    });
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Button 
            title="Configure the SDK" 
            onPress={() => {
            this.configureTheSDK()
          }} />
          <TextInput 
            placeholder="Username"
            style={{ margin: 20, borderBottomColor: "#000", borderBottomWidth: 1, fontSize: 18, height: 40 }}
            onChangeText={text => this.setState({ username: text })}
          />
          <TextInput 
            placeholder="Password"
            secureTextEntry={true}
            style={{ margin: 20, borderBottomColor: "#000", borderBottomWidth: 1, fontSize: 18, height: 40 }}
            onChangeText={text => this.setState({ password: text })}
          />
          <Button title="Login" onPress={() => {
            this.login()
          }} />
        </SafeAreaView>
      </>
    );
  }
}

export default App;

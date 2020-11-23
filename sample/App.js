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
  StyleSheet,
  View,
} from 'react-native';

import Karhoo from 'react-native-karhoo-sdk';

const styles = StyleSheet.create({
  button: {
    margin: 20,
    padding: 30
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
})

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
            style={styles.button}
            onPress={() => {
            this.configureTheSDK()
          }} />
          <View style={styles.space} />
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
          <Button 
            title="Login"
            style={styles.button}
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

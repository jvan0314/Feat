import React, { Component } from 'react';
import {View, Text,ScrollView} from 'react-native';
import { Button, Input, NavigationBar } from 'teaset';
import styles from '../StyleSheet/Style';


export default class Testing_Screen extends Component {

  static navigationOptions = {
    title: 'Testing Page',
  };

  render() {
    return (
      <View style={styles.screenStyle}>
        <Text style={styles.developerPageMargin}>
          Developer page to navigate through screens.
        </Text>
        <Text style={[styles.developerPageMargin,styles.linkText]}
          onPress={() => this.props.navigation.navigate("Login")}>
          Login_Screen
        </Text>
        <Text style={[styles.developerPageMargin,styles.linkText]}
          onPress={() => this.props.navigation.navigate("Register")}>
          Register_Screen
        </Text>
        <Text style={[styles.developerPageMargin,styles.linkText]}
          onPress={() => this.props.navigation.navigate("Forgot_Password")}>
          Forgot_Screen
        </Text>
        <Text style={[styles.developerPageMargin,styles.linkText]}
          onPress={() => this.props.navigation.navigate("Category")}>
          Category_Screen
        </Text>

      </View>
    );
  }
}

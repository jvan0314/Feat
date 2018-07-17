import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Login_Form from '../Components/Login_Form';
import Social_Buttons from '../Components/Social_Buttons';
import { Button, Input, NavigationBar } from 'teaset';
import styles from '../StyleSheet/Style';



export default class Login_Screen extends Component {

  static navigationOptions = {
    title: 'Login',
  };

  render() {
    return (
      <View style = {styles.screenStyle}>
        <Social_Buttons />
        <Text style={[styles.normalText,{textAlign:'center'}]}>
          ----------  OR  ----------
        </Text>
        <Login_Form navigation={this.props.navigation}/>
      </View>
    );
  }
}

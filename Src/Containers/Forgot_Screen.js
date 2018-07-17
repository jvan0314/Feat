import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Forgot_Form from '../Components/Forgot_Form';
import Social_Buttons from '../Components/Social_Buttons';
import {StackNavigator,} from 'react-navigation';
import styles from '../StyleSheet/Style';


export default class Forgot_Screen extends Component {

  static navigationOptions = {
    title: 'Reset Password',
  };

  render() {
    return (
        <View style = {styles.screenStyle}>
        <Forgot_Form navigation={this.props.navigation}/>
      </View>
    );
  }
}

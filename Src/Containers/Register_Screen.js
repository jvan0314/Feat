import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Register_Form from '../Components/Register_Form';
import Social_Buttons from '../Components/Social_Buttons';
import styles from '../StyleSheet/Style';


class Register_Screen extends Component {

  static navigationOptions = {
    title: 'Account Sign Up'
  };

  render() {
    return (
        <View style = {styles.screenStyle}>
        <Register_Form navigation={this.props.navigation}/>
      </View>
    );
  }
}
export default Register_Screen;

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from 'teaset';
import styles from '../StyleSheet/Style';
// this is for debugging console.log(this.state)

export default class Forgot_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  render() {
    return (
      <View style = {{
        flexDirection:'column',
        alignItems:'center',
        padding: 20}}>

        {/*<Text style ={styles.headerTitle}>Reset Your Password</Text>*/}

        <Text style={[styles.normalText, {marginTop:10}]}>Enter the email associated wtih your account to receive a password reset email.</Text>

        <Input
            placeholder ='Email'
            style ={styles.inputTextBar}
            size = 'lg'
            value ={this.state.text}
            onChangeText={(event)=> {
              this.setState({
              ...this.state,
              email: event})
            }}/>

        <Button
          style = {[styles.button,{margin:20}]}
          type='primary'
          size='lg'
          title='Reset'
          onPress={
            onResetPress=()=>{
              if(this.state.email==''){
                alert('Please enter the email associated with your account.');
              }
              else{
                alert('An email has been sent to your mailbox. Please follow the instructions to reset your password.');
                console.log(this.state);
              }
            }
          }/>

        <Text style={styles.normalText}>
            Return to
            <Text style = {styles.linkText} onPress={() => this.props.navigation.navigate('Login')}> Login.</Text>
          </Text>

      </View>
    );
  }
}

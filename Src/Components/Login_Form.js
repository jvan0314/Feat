import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Button, Input } from 'teaset';
import styles from '../StyleSheet/Style'

// this is for debugging console.log(this.state)

export default class Login_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <View style={{
          flexDirection:'column',
          alignItems:'center',
          padding: 20}}>

        <Input
          placeholder ='Email'
          style = {styles.inputTextBar}
          size = 'lg'
          value = {this.state.text}
          onChangeText={(event)=> {
            this.setState({
            ...this.state,
            email: event})
          }}/>

        <Input
          placeholder='Password'
          secureTextEntry={true}
          maxLength={20}
          style = {styles.inputTextBar}
          size = 'lg'
          value = {this.state.text}
          onChangeText={(event)=> {
            this.setState({
            ...this.state,
            password: event})
          }}/>

        <Button
          style = {[styles.button,{margin:20}]}
          type='primary'
          size='lg'
          title='Login'
          onPress={
            onLoginPress=()=>{
              if(this.state.email==''||this.state.password==''){
                alert('Please fill in missing fields');
              }
              else{
                alert('Successfully logged in, now do somethign with backend. going to restaurant page now')
                console.log(this.state);
              }
            }
         }/>

       <Text style={styles.normalText}>
            Not a Member?
            <Text style = {styles.linkText} onPress={() => this.props.navigation.navigate("Register")}> Sign Up Now</Text>
          </Text>

          <Text style={[styles.normalText,{marginTop:10}]}>
            Forgot Your Password? Click
            <Text style = {styles.linkText}  onPress={() => this.props.navigation.navigate("Forgot_Password")}> Here</Text>
          </Text>

      </View>
    );
  }
}

import React, { Component } from 'react';
import { View, Text, CheckBox, ScrollView} from 'react-native';
import { Button, Input, } from 'teaset';
import PopupDialog, {DialogTitle} from 'react-native-popup-dialog';
import styles from '../StyleSheet/Style'

// this is for debugging console.log(this.state)

export default class Register_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword:'',
      checked:false
    };
  }

  render() {
    return (
      <View style = {{
        flexDirection:'column',
        alignItems:'center',
        padding: 20}}>

        <Input
            placeholder ='First Name'
            style ={styles.inputTextBar}
            size = 'lg'
            value ={this.state.text}
            onChangeText={(event)=> {
              this.setState({
              ...this.state,
              firstName: event
              })
            }}/>

        <Input
            placeholder ='Last Name'
            style ={styles.inputTextBar}
            size = 'lg'
            value ={this.state.text}
            onChangeText={(event)=> {
              this.setState({
              ...this.state,
              lastName: event})
            }}/>


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

        <Input
          placeholder='Password'
          secureTextEntry={true}
          maxLength={20}
          style ={styles.inputTextBar}
          size = 'lg'
          value ={this.state.text}
          onChangeText={(event)=> {
            this.setState({
            ...this.state,
            password: event})
          }}/>

        <Input
          placeholder='Confirm Password'
          secureTextEntry={true}
          maxLength={20}
          style ={styles.inputTextBar}
          size = 'lg'
          value ={this.state.text}
          onChangeText={(event)=> {
            this.setState({
            ...this.state,
            confirmPassword: event})
          }}/>

        <View style = {{
          flexDirection:'row',
          alignItems:'center',
        }}>

          <CheckBox
            value={this.state.checked}
            onValueChange={() => this.setState({ checked: !this.state.checked })}
          />

        <Text style={[styles.normalText,{margin:15}]}>
          I agree to the
          <Text style = {styles.linkText}
            onPress={() => this.popupDialog.show()}> Terms of Use</Text>
          </Text>
        </View>

        <PopupDialog
          dialogTitle={<DialogTitle title ='Terms of Use'/>}
          dialogStyle={{height:400}}
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}>

            <ScrollView>
              <Text
                style = {[styles.normalText,{margin:15}]}>Terms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of  stuffTerms of use box of  of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffstuffTerms of use box of  of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffstuffTerms of use box of  of stuffTerms of use box of stuffTerms ofTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of  stuffTerms of use box of  of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffstuffTerms of use box of  of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffTerms of use box of stuffstuffTerms of use box of  of stuffTerms of use box of stuffTerms of
              </Text>
            </ScrollView>
            <View style={{alignItems: 'center', margin:10}}>
              <Button
                size='md'
                title="Close"
                type='secondary'
                onPress={() => {this.popupDialog.dismiss()}}/>
            </View>

        </PopupDialog>

        <Button
          style = {styles.button}
          type='primary'
          size='lg'
          title='Register'
          onPress={
            onRegisterPress=()=>{
              if(this.state.firstName==''||
                this.state.lastName==''||
                this.state.email==''||
                this.state.password==''||
                this.state.confirmPassword=='')
              {
                alert('Please fill in missing fields');
              }
              else if(this.state.password!=this.state.confirmPassword){
                alert('Your password and confirmation password do not match, please try again.');
              }
              else if(this.state.checked!=true){
                alert('Please agree to the terms of use.');
              }
              else{
                alert('Successfully Registered, now do somethign with backend')
                console.log(this.state);
              }
            }
         }/>

       <Text style={[styles.normalText,{marginTop:15}]}>
            Already have an Account?
            <Text style = {styles.linkText} onPress={() => this.props.navigation.navigate('Login')}> Log in here</Text>
       </Text>

      </View>
    );
  }

}

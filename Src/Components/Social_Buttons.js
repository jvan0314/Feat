import React, { Component } from 'react';
import {View, Text, TextInput } from 'react-native';
import { Button } from 'teaset';


export default class Social_Buttons extends Component {
  render() {
    return (
      <View style={{
          flexDirection:'row',
          justifyContent: 'center',
          margin: 25}}>

        <Button
          style = {{width:150, marginRight: 35}}
          type='primary'
          size='lg'
          title='Facebook'
          onPress={() => alert('This button logins into fb')} />

        <Button
          style = {{width:150}}
          type='danger'
          size='lg'
          title='Google'
          onPress={() => alert('This button logins into gmail')} />

      </View>
    );
}

}

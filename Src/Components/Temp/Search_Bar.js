import React, { Component } from 'react';
import {View, Text, TextInput } from 'react-native';
import { Button, SearchInput } from 'teaset';


export default class Search_Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  render() {
    return (
      <View>
      <SearchInput
        placeholder='Custom'
        style={{width: 400, height: 40}}
        inputStyle={{fontSize: 16}}
        iconSize={15}
        value={this.state.event}
        onChangeText={(event)=> {
          this.setState({
          ...this.state,
          email: event})
        }}/>
      </View>
    );
}

}

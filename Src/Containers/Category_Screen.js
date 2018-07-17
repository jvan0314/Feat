import React, { Component } from 'react';
import {View, Text,ScrollView} from 'react-native';
import { Button, Input, NavigationBar } from 'teaset';
import Food_Card_List from '../Components/Food_Card_List'
import styles from '../StyleSheet/Style';


export default class Testing_Screen extends Component {

  static navigationOptions = {
    title: 'Recommendations',
  };

  render() {
    return (
      <ScrollView style = {styles.screenStyle}>
        <Food_Card_List navigation={this.props.navigation}/>
          <Food_Card_List navigation={this.props.navigation}/>
            <Food_Card_List navigation={this.props.navigation}/>
      </ScrollView>
    );
  }
}

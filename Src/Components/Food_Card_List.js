import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { Card } from "react-native-elements";
import Food_Cards from './Food_Cards';

const data = [
  {

    title: "something"
  },
  {
    title: "something2"
  },
  {
    title: "something3"
  },
  {
    title: "something4"
  },
  {
    title: "something5"
  },

];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,

    };
  }

  render() {
    return (
      <View style={{
        height:330,
        backgroundColor:'red'}}>
        <View style={{
          flexDirection:'row',
          height:50,
          width:'100%',
          alignItems:'center',
          backgroundColor:'blue'}}>
          <Text style={{
            fontSize:26,
            fontWeight:'bold',
            marginLeft:10}}>
            Nearby
          </Text>
        </View>

        <View style = {{height:'100%'}}>
        <FlatList
          horizontal
          data={this.state.data}
          renderItem={({ item: rowData }) => {
            return (
              <Food_Cards navigation={this.props.navigation}/>
            );
          }}
          keyExtractor={(item, index) => item.id}/>
          </View>
      </View>
    );
  }
}

import React, { Component } from 'react';
import {View, Text, TextInput} from 'react-native';
import { Button, SearchInput } from 'teaset';


export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:'',
    };
  }

  render() {
    return (
      <View style={{
        flex:1,
      }}>
        <View style={{
          flexDirection:'row',
          height:50,
          width:'100%',
          borderBottomWidth:1,
          borderColor:'gray'
        }}>
          <View style={{
            flex:1,
            justifyContent:'center',
          }}>
            <Text style ={{
              fontSize: 28,
              fontWeight: 'bold',
              marginLeft:10}}>Nearby</Text>
          </View>

          <View style={{
            flex:1,
            justifyContent:'center',
          }}>
          <Text style={{
            color:'orange',
            justifyContent:'center',
            fontSize: 16,
            fontWeight:'bold',
            textAlign:'right',
            marginRight:10
          }}>See All ></Text>
          </View>
        </View>

        <View style={{
          flexDirection:'row',
          height:250,
          width:'100%',
          borderBottomWidth:1,
          borderColor:'gray',
        }}>
          <View style={{
            height:250,
            width:'65%',
            borderBottomWidth:1,
            borderColor:'gray',
            backgroundColor:'green'
          }}>
          </View>
          <View style={{
            height:250,
            width:'65%',
            borderBottomWidth:1,
            borderColor:'blue',
            backgroundColor:'gray'
          }}>
          </View>

        </View>



      </View>



    );
  }

}

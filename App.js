import React, { Component } from 'react';
import {View, Text, Dimensions } from 'react-native';
import Login_Screen from './Src/Containers/Login_Screen';
import Register_Screen from './Src/Containers/Register_Screen';
import Forgot_Screen from './Src/Containers/Forgot_Screen';
import Category_Screen from './Src/Containers/Category_Screen';
import Testing_Screen from './Src/Containers/Testing_Screen';
import {StackNavigator} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = StackNavigator(
  {
    Login: {screen: Login_Screen},
    Register: { screen: Register_Screen},
    Forgot_Password:{screen:Forgot_Screen},
    Category:{screen:Category_Screen},
    Testing:{screen:Testing_Screen},

  },

  {
    initialRouteName: 'Testing', //this decides the starting page when app runs

    navigationOptions:{
      headerLeft: null,
      headerStyle: {
        backgroundColor: 'white',
        //borderBottomWidth:1,
        borderColor:'gray',

      },
      headerTitleStyle: {
        width: '90%', //this may need changes later, unknown
        textAlign: 'center', //effects due to different sizes
        fontWeight:'bold',
        fontSize:24,
        color:'orange'
      },

    }
  }
);

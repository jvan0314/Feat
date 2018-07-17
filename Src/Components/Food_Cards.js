import React, { Component } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListTitle:'',
      Name:'',
      Price:'',
      Rating:'',
      Distance:'',
      Address:'',
    };
  }

  render() {
    return (
      <TouchableOpacity onPress={() => alert('Clicking here will take you to restaurant detail')}>
        <Card
          title={null}
          image={{uri:"http://foodporndaily.com/pictures/grilled-steak-morel-mushrooms-red-wine-demi-glace-buttery-sauteed-spinach.jpg" }}
          containerStyle={{padding: 0,height:250, width:300 }}>
          <Text>
            FoodPornDaily
          </Text>
          <Text>
            Restaurant, Gourmet, Cafe
          </Text>
          <Text>
            $$$$|harded coded details|2.6mi
          </Text>
          <Text>
            123 Fake St, FakeCity
          </Text>
        </Card>
      </TouchableOpacity>
    );
  }
}

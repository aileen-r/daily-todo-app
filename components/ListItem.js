import React from "react";
import { View } from "react-native";
import Checkbox from "./Checkbox";
import ToDoLabel from "./ToDoLabel";

export default class ListItem extends React.Component {
  render() {
    return (
      <View>
        <Checkbox />
        <ToDoLabel />
      </View>
    );
  }
}
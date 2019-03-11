import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import ListTitle from "./ListTitle";
import ListItem from "./ListItem";

export default class ToDoList extends React.Component {
  render() {
    return (
      <View>
        <ListTitle/>
        <ListItem/>
        <TextInput style = {styles.input} placeholder = "Add an item!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 24
  }
});
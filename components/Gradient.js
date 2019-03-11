import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import ToDoList from "./ToDoList";

//Should be able to import from Layout.js
const width = Dimensions.get('window').width;

export default class Gradient extends React.Component {
  render() {
    return (
      <View style={styles.gradient}>
        <ToDoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gradient: {
    width: width - 20,
    padding: 20,
    marginBottom: 10,
    backgroundColor: "#E4E4E4",
    flex: 1
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 24
  }
});

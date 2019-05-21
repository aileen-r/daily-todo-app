import React from "react";
import { Text, StyleSheet } from "react-native";

export default class ToDoLabel extends React.Component {
  render() {
    return (
      <Text style={styles.text}>To Do Label</Text>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '300',
    fontSize: 18,
    marginVertical: 20
  }
});
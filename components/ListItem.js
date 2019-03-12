import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Checkbox from "./Checkbox";
import ToDoLabel from "./ToDoLabel";

export default class ListItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Checkbox/>
        <Text style={styles.text}>Todo List will show here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontWeight: '300',
    fontSize: 18,
    marginVertical: 20
  }
});
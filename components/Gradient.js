import React from "react";
import { View, ScrollView, StyleSheet, TextInput, Dimensions } from "react-native";

import ToDoList from "./ToDoList";

//Should be able to import from Layout.js
const width = Dimensions.get('window').width;

export default class Gradient extends React.Component {
  constructor() {
    super();
    this.state = {
      newToDoItem: ''
    };

    newTodoItemController = toDoLabel => {
      this.setState({
        newToDoItem: toDoLabel
      });
    };
  }
  
  render() {
    return (
      <View style={styles.gradient}>
        <TextInput
          style={styles.input}
          placeholder={'Add an item!'}
          value={this.newToDoItem}
          onChangeText={this.newTodoItemController}
          placeholderTextColor={'#999'}
          returnKeyType={'done'}
          autoCorrect={false}
        />
        <ScrollView>
          <ToDoList />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gradient: {
    width: width - 20,
    padding: 20,
    marginVertical: 30,
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

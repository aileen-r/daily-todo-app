import React from "react";
import { View, ScrollView, StyleSheet, TextInput, Dimensions } from "react-native";

import EditButton from "./EditButton";
import ToDoList from "./ToDoList";

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
        {/* <TextInput
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
        <EditButton/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  gradient: {
    width: width - 20,
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

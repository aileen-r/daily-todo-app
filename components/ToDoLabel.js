import React from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";

export default class ToDoLabel extends React.Component {
  render() {
    return (
      <View style={[styles.wrapper, this.props.editMode && styles.wrapperBorder]}>
        {this.props.editMode && (
          <TextInput 
            style={[styles.text, styles.input]}
            value={text}
            onChangeText={this.newTodoItemController}
            returnKeyType={'done'}
            autoCorrect={false}/>
        ) || (
          <Text style={styles.text}>{text}</Text>
        )}
      </View>
    );
  }
};

const text = 'This is a to do item!';

const wrapperHeight = 30

const styles = StyleSheet.create({
  text: {
    fontWeight: '300',
    fontSize: 18
  },
  input: {
    marginTop: 1
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    height: wrapperHeight,
    borderBottomWidth: 1,
    borderBottomColor: "transparent",
  },
  wrapperBorder: {
    borderBottomColor: "#bbb"
  }
});
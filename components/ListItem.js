import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Checkbox from "./Checkbox";
import ToDoLabel from "./ToDoLabel";
import DeleteButton from "./DeleteButton";

export default class ListItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Checkbox/>
        <ToDoLabel editMode={this.props.editMode}/>
        {this.props.editMode && (
          <DeleteButton/>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
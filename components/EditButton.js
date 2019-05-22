import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class EditButton extends React.Component {
  render() {
    return (
      <View style={styles.editButton}>
        <Text>️️{this.props.editMode ? '✖️' : '✒️'}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  editButton: {
    padding: 15,
    backgroundColor: "#ffffff",
    color: "#B62A17",
    position: "absolute",
    bottom: 0,
    right: 0,
    // marginRight: 15,
    // marginBottom: 15,
    borderRadius: 50
  }
});
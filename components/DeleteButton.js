import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class DeleteButton extends React.Component {
  render() {
    return (
      <View style={styles.deleteButton}>
        <Text>️️❌</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  deleteButton: {
    alignSelf: 'flex-end',
    marginLeft: 10,
    height: 30,
    alignItems: 'center',
    flexDirection: 'row'
  }
});
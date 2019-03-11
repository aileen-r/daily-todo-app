import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";

//Should be able to import from Layout.js
const width = Dimensions.get('window').width;

export default class Gradient extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Add an item!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
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

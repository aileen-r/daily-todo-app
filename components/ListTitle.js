import React from "react";
import { Text, StyleSheet } from "react-native";

export default class ListTitle extends React.Component {
  render() {
    return (
      <Text style={styles.listTitle}>List Title</Text>
    );
  }
}

const styles = StyleSheet.create({
  listTitle: {
    alignSelf: "center",
    color: "#B62A17",
    fontSize: 36,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "500"
  }
});
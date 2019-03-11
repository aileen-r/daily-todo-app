import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appTitle}>Daily</Text>

        <View style={styles.card}>
          <TextInput style={styles.input} placeholder="Add an item!" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  appTitle: {
    color: '#B62A17',
    fontSize: 36,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: '300'
  },
  card: {
    width: width - 20,
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#E4E4E4',
    flex: 1
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24
  }
});
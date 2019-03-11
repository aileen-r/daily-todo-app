import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import Gradient from './components/Gradient';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appTitle}>Daily</Text>

        <Gradient />
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
  appTitle: {
    color: '#B62A17',
    fontSize: 36,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: '300'
  }
});
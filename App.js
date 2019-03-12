import React from 'react';
import { StyleSheet, View } from 'react-native';

import Gradient from './components/Gradient';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
  }
});
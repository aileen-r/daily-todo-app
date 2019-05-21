import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import EditButton from '../components/EditButton';
import ToDoList from '../components/ToDoList';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.gradient}>
        <View style={styles.menuIcon}>
          <Text>Menu</Text>
        </View>
        <View style={styles.container}>
          <ScrollView>
            <ToDoList />
          </ScrollView>
          <EditButton/>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1
  },
  gradient: {
    marginHorizontal: 15,
    marginVertical: 30,
    backgroundColor: "#E4E4E4",
    flex: 1
  },
  menuIcon: {
    marginLeft: -10,
  }
});
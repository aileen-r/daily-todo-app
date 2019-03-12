import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import ListTitle from "./ListTitle";
import ListItem from "./ListItem";

export default class ToDoList extends React.Component {
  state = {
    isEditing: false
  };

  render() {
    return (
      <View>
         <ListTitle/>
         <ListItem/>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
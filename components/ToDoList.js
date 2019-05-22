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
  render() {
    return (
      <View>
         <ListTitle/>
         <ListItem editMode={this.props.editMode}/>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
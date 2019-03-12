import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

export default class Checkbox extends React.Component {
  state = {
    isCompleted: false
  };

  toggleItem = () => {
    this.setState(prevState => {
      return{
        isCompleted: !prevState.isCompleted
      }
    })
  }

  render() {
    const {isCompleted} = this.state;
    return ( 
      <TouchableOpacity onPress={this.toggleItem}>
        <View style={[styles.circle, isCompleted ? styles.completeCircle : styles.incompleteCircle]} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 30,
    height: 30,
    borderColor: '#343131',
    borderRadius: 15,
    borderWidth: 1,
    marginRight: 20
  },
  completeCircle: {
    backgroundColor: '#343131'
  },
  incompleteCircle: {
    backgroundColor: 'transparent'
  }
});
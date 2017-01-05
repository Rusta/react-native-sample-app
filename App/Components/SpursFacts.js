import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SpursFacts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Spurs are the best - FACT!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  }
});

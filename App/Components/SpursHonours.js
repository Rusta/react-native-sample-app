import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SpursHonours extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Spurs Honours</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

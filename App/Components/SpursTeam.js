import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SpursTeam extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Spurs Team</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

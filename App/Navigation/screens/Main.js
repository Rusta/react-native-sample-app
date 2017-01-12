import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Main from '../../Components/Main';

class MainScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Sample App',
    }
  }

  goToSpursFacts = () => {
    this.props.navigator.push('spursFacts');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Main />
        <TouchableOpacity
          style={styles.button}
          onPress={this.goToSpursFacts}
        >
          <Text>
            Spurs Facts
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  }
});

export default MainScreen;

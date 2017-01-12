import React from 'react';
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
      <Main goToSpursFacts={this.goToSpursFacts} />
    );
  }
}

export default MainScreen;

import React, { Component } from 'react';
import {
  createRouter,
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';
import { Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as colors from '../../config/colors';
import SpursCrest from '../../Components/SpursCrest';
import SpursHonours from '../../Components/SpursHonours';
import SpursTeam from '../../Components/SpursTeam';

const Router = createRouter(() => ({
  spursCrest: () => SpursCrest,
  spursHonours: () => SpursHonours,
  spursTeam: () => SpursTeam,
}));


function getColor(isSelected) {
  return isSelected ? 'white' : '#000';
}

function getIcon(isSelected, icon) {
  return isSelected ? icon : `${icon}-outline`;
}

const tabIconSize = 24;

export default class SpursFacts extends Component {
  static route = {
    navigationBar: {
      title: 'Spurs Facts',
    }
  }


  renderTitle = (isSelected, title) => {
    return (
      <Text style={{ color: getColor(isSelected) }}>
        {title}
      </Text>
    );
  }

  render() {
    return (
      <TabNavigation
        id="spursFacts"
        navigatorUID="spursFacts"
        initialTab="spursCrest"
      >
        <TabItem
          id="spursCrest"
          title="Badge"
          selectedStyle={styles.selectedTab}
          renderTitle={this.renderTitle}
          renderIcon={(isSelected) =>
            <Ionicons
              name={getIcon(isSelected, 'ios-football')}
              size={tabIconSize}
              color={getColor(isSelected)}
            />}
        >
          <StackNavigation
            id="spursCrest"
            navigatorUID="spursCrest"
            initialRoute={Router.getRoute('spursCrest')}
          />
        </TabItem>

        <TabItem
          id="spursHonours"
          title="Honours"
          selectedStyle={styles.selectedTab}
          renderTitle={this.renderTitle}
          renderIcon={(isSelected) =>
            <Ionicons
              name={getIcon(isSelected, 'ios-trophy')}
              size={tabIconSize}
              color={getColor(isSelected)}
            />}
        >
          <StackNavigation
            id="spursHonours"
            initialRoute={Router.getRoute('spursHonours')}
          />
        </TabItem>

        <TabItem
          id="spursTeam"
          title="Team"
          selectedStyle={styles.selectedTab}
          renderTitle={this.renderTitle}
          renderIcon={(isSelected) =>
            <Ionicons
              name={getIcon(isSelected, 'ios-shirt')}
              size={tabIconSize}
              color={getColor(isSelected)}
            />}
        >
          <StackNavigation
            id="spursTeam"
            initialRoute={Router.getRoute('spursTeam')}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  selectedTab: {
    backgroundColor: colors.main,
  }
});

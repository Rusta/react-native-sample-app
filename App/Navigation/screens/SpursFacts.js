import React, { Component } from 'react';
import {
  createRouter,
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';
import { StyleSheet } from 'react-native';

import SpursCrest from '../../Components/SpursCrest';
import SpursHonours from '../../Components/SpursHonours';
import SpursTeam from '../../Components/SpursTeam';

const Router = createRouter(() => ({
  spursCrest: () => SpursCrest,
  spursHonours: () => SpursHonours,
  spursTeam: () => SpursTeam,
}));

export default class SpursFacts extends Component {
  static route = {
    navigationBar: {
      title: 'Spurs Facts',
    }
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
          title="Crest"
          selectedStyle={styles.selectedTab}
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
  }
});

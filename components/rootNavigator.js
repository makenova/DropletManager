import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
} from 'react-native';

import Root from './root';

export default class RootNavigator extends Component {
  renderScene() {
    return <Root />;
  }

  render() {
    const routeMapper = {
      Title: (route, navigator, index) => <Text>Hello</Text>,
      RightButton: () => null,
      LeftButton: () => null,
    };

    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={routeMapper}
          />
        }
      />
    );
  }
}

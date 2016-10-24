import React, { Component } from 'react';
import {
  Text,
  Navigator,
} from 'react-native';

import Root from './root';
import DropletDetail from './Droplet';
import { navBarStyles } from '../sharedStyles';

export default class RootNavigator extends Component {
  renderScene(route, navigator) {
    switch (route.title) {
      case 'droplet':
        return <DropletDetail navigator={navigator} droplet={route.droplet} />;
      case 'root':
      default:
        return <Root navigator={navigator} />;
    }
  }

  render() {
    const routeMapper = {
      Title: (route) => {
        const title = route.title === 'root' ?
          'Droplet Manager' :
          route.title.slice(0, 1).toUpperCase() + route.title.slice(1);

        return <Text style={navBarStyles.title}>{title}</Text>;
      },
      RightButton: () => null,
      LeftButton: (route, navigator, index) => {
        if (index !== 0) {
          return (
            <Text
              style={[navBarStyles.button, navBarStyles.rightButton]}
              onPress={navigator.pop}
            >
              Back
            </Text>
          );
        }
        return null;
      },
    };

    return (
      <Navigator
        initialRoute={{ title: 'root', index: 0 }}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={routeMapper}
            style={navBarStyles.navbar}
          />
        }
      />
    );
  }
}

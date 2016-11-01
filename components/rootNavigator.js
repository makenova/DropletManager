import React, { Component } from 'react';
import {
  BackAndroid,
  Navigator,
  Platform,
  Text,
} from 'react-native';

import Root from './root';
import DropletDetail from './Droplet';
import { navBarStyles } from '../sharedStyles';
import LeftButton from './LeftButton';

export default class RootNavigator extends Component {
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      const nav = this.refs.nav;
      const routes = nav.getCurrentRoutes();

      if (routes.length > 1) {
        nav.pop();
        return true;
      }
      return false;
    });
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress');
  }

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
        if (index !== 0 && Platform.OS === 'ios') {
          return <LeftButton action={navigator.pop} text="Back" />;
        }
        return null;
      },
    };

    return (
      <Navigator
        ref="nav"
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

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import API from '../api';
import DropletList from './DropletList';
import { color } from '../sharedStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: color.background,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default class DropletManager extends Component {
  constructor() {
    super();
    this.state = {
      loadingData: true,
      droplets: [],
      error: '',
    };

    this.showDroplet = this.showDroplet.bind(this);
  }

  componentDidMount() {
    API.client.dropletsGetAll()
      .then(response => this.setState({
        droplets: response.body.droplets,
        loadingData: false,
      }))
      .catch(() => this.setState({ error: 'Could not get droplets' }));
  }

  showDroplet(droplet) {
    this.props.navigator.push({
      title: 'droplet',
      droplet,
    });
  }

  render() {
    if (this.state.loadingData) return null;
    return (
      <View style={styles.container}>
        <DropletList
          droplets={this.state.droplets}
          showDroplet={this.showDroplet}
        />
        <Text>{this.state.error}</Text>
      </View>
    );
  }
}

DropletManager.propTypes = {
  navigator: PropTypes.object.isRequired,
};

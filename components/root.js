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
      account: {},
      droplets: [],
      error: '',
      loadingData: true,
    };

    this.showDroplet = this.showDroplet.bind(this);
  }

  componentDidMount() {
    API.getAccountDetails()
      .then(account => this.setState({ account }))
      .catch(() => this.setState({ error: 'Could not get account details' }))
      .then(() => API.client.dropletsGetAll())
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
        <Text style={styles.welcome}>
          email: {this.state.account.email || '...'}
        </Text>
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

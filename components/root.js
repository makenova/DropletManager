import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import API from '../api';
import DropletList from './DropletList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
    };
  }

  componentDidMount() {
    API.getAccountDetails()
      .then(account => this.setState({ account }))
      .catch(() => this.setState({ error: 'Could not get account details' }))
      .then(() => API.client.dropletsGetAll())
      .then(response => this.setState({ droplets: response.body.droplets }))
      .catch(() => this.setState({ error: 'Could not get droplets' }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Droplet Manager
        </Text>
        <Text style={styles.welcome}>
          email: {this.state.account.email || '...'}
        </Text>
        <DropletList droplets={this.state.droplets} />
        <Text>{this.state.error}</Text>
      </View>
    );
  }
}

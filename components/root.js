import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import API from '../api';

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class DropletManager extends Component {
  constructor() {
    super();
    this.state = {
      account: {},
      error: '',
    };
  }

  componentDidMount() {
    API.getAccountDetails()
      .then(account => this.setState({ account }))
      .catch(() => this.setState({ error: 'Could not get account details' }));
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
      </View>
    );
  }
}

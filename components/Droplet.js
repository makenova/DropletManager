import React, { PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { color } from '../sharedStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: color.background,
  },
});

const Droplet = ({ droplet }) =>
  <View style={styles.container}>
    <Text>Name: {droplet.name}</Text>
  </View>;

Droplet.propTypes = {
  droplet: PropTypes.object,
};

export default Droplet;

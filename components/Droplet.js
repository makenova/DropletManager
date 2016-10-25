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
  droplet: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
    region: PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
    }),
  }),
};

export default Droplet;

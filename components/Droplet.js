import React, { PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { color } from '../sharedStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    padding: 20,
    backgroundColor: color.background,
  },
  dropletName: {
    fontSize: 24,
  },
});

const Droplet = ({ droplet }) =>
  <View style={styles.container}>
    <Text style={styles.dropletName}>{droplet.name}</Text>
    <Text style={styles.dropletDetails}>
      {droplet.size_slug.toUpperCase()} / {droplet.disk}GB /
      {` ${droplet.region.slug.toUpperCase()}`}
    </Text>
    <Text>{droplet.image.distribution} {droplet.image.name}</Text>
  </View>;

Droplet.propTypes = {
  droplet: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
    disk: PropTypes.number,
    size_slug: PropTypes.string,
    image: PropTypes.shape({
      distribution: PropTypes.string,
      name: PropTypes.string,
    }),
    locked: PropTypes.bool,
    region: PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
    }),
  }),
};

export default Droplet;

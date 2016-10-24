import React, { PropTypes } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    margin: 10,
  },
  listItem: {
    // flex: 1,
  },
});

const DropletNetworks = ({ networks }) => {
  const v4 = networks.v4.map(v4network => v4network.ip_address);
  const v6 = networks.v6.map(v6network => v6network.ip_address);

  return (
    <View>
      <Text>{v4}</Text>
      {
        (v6.length > 0) ? <Text>v6</Text> : null
      }
    </View>
  );
};

DropletNetworks.propTypes = {
  networks: PropTypes.shape({
    v4: PropTypes.arrayOf(PropTypes.object),
    v6: PropTypes.arrayOf(PropTypes.object),
  }),
};

const DropletListItem = ({ droplet, showDroplet }) =>
  <TouchableOpacity
    style={styles.listItem}
    onPress={() => showDroplet(droplet)}
  >
    <Text>{droplet.name}</Text>
    <Text>{droplet.status}</Text>
    <DropletNetworks networks={droplet.networks} />
    <Text>{droplet.region.slug}</Text>
  </TouchableOpacity>;

DropletListItem.propTypes = {
  droplet: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
    region: PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
    }),
  }),
  showDroplet: PropTypes.func,
};

const DropletList = ({ droplets, showDroplet }) =>
  <View style={styles.container}>
    {
      droplets.map((droplet, key) =>
        <DropletListItem
          droplet={droplet}
          key={key}
          showDroplet={showDroplet}
        />
      )
    }
  </View>;

DropletList.propTypes = {
  droplets: PropTypes.arrayOf(PropTypes.object).isRequired,
  showDroplet: PropTypes.func.isRequired,
};

export default DropletList;

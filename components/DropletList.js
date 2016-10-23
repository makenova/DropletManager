import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';

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

const DropletListItem = ({ droplet }) =>
  <View>
    <Text>{droplet.name}</Text>
    <Text>{droplet.status}</Text>
    <DropletNetworks networks={droplet.networks} />
    <Text>{droplet.region.slug}</Text>
  </View>;

DropletListItem.propTypes = {
  droplet: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
    region: PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
    }),
  }),
};

const DropletList = ({ droplets }) =>
  <View>
    <Text>Droplets:</Text>
    {
      droplets.map((droplet, key) =>
        <DropletListItem droplet={droplet} key={key} />
      )
    }
  </View>;

DropletList.propTypes = {
  droplets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DropletList;

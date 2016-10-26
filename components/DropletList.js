import React, { Component, PropTypes } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { color } from '../sharedStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    margin: 10,
  },
  listItem: {
    flex: 1,
    backgroundColor: color.background,
    marginVertical: 5,
    paddingVertical: 5,
  },
  listItemContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  listItemLargeBox: {
    flex: 4,
    paddingVertical: 5,
  },
  listItemSmallBox: {
    flex: 1,
    alignItems: 'flex-end',
    paddingVertical: 5,
  },
  listItemHostName: {
    fontSize: 24,
    marginBottom: 8,
  },
  statusButton: {
    width: 16,
    height: 16,
    borderRadius: 8,
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

const DropletActivityIndicator = ({ status }) => {
  let statusColor = '';

  switch (status) {
    case 'new':
      statusColor = color.webSafeBlue;
      break;
    case 'active':
      statusColor = color.successGreen;
      break;
    case 'off':
      statusColor = color.alertRed;
      break;
    case 'archive':
      statusColor = color.neutralYellow;
      break;
    default:
      statusColor = color.neutralGrey;
      break;
  }

  return (
    <View style={[styles.statusButton, { backgroundColor: statusColor }]} />
  );
};

DropletActivityIndicator.propTypes = {
  status: PropTypes.string.isRequired,
};

const DropletListItem = ({ droplet, showDroplet }) =>
  <TouchableOpacity
    style={styles.listItem}
    onPress={() => showDroplet(droplet)}
  >
    <View style={styles.listItemContainer}>
      <View style={styles.listItemLargeBox}>
        <Text style={styles.listItemHostName}>{droplet.name}</Text>
        <DropletNetworks networks={droplet.networks} />
        <Text>{droplet.region.slug}</Text>
      </View>
      <View style={styles.listItemSmallBox}>
        <DropletActivityIndicator status={droplet.status} />
      </View>
    </View>
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

export default class DropletList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = { dataSource: ds.cloneWithRows(props.droplets) };
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData =>
            <DropletListItem
              droplet={rowData}
              showDroplet={this.props.showDroplet}
            />
          }
        />
      </View>
    );
  }
}

DropletList.propTypes = {
  droplets: PropTypes.arrayOf(PropTypes.object).isRequired,
  showDroplet: PropTypes.func.isRequired,
};

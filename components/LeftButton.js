import React, { PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { color, navBarStyles } from '../sharedStyles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    paddingLeft: 10,
    marginTop: 5,
  },
});

const LeftButton = ({ action, text }) =>
  <View style={styles.container}>
    <Icon
      size={30}
      style={styles.icon}
      name="ios-arrow-back"
      color={color.whiteFont}
    />
    <Text
      style={[navBarStyles.button, navBarStyles.leftButton]}
      onPress={action}
    >
      {text}
    </Text>
  </View>;

LeftButton.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default LeftButton;

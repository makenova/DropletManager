/* eslint global-require: "off"*/

import { StyleSheet } from 'react-native';

export const color = {
  background: '#FFFFFF',
  navBarBackground: '#008BCF',
  whiteFont: '#FFFFFF',
};

export const navBarStyles = StyleSheet.create({
  navbar: {
    backgroundColor: color.navBarBackground,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: color.whiteFont,
  },
  button: {
    fontSize: 17,
    marginTop: 10,
    color: color.whiteFont,
  },
  rightButton: {
    paddingRight: 10,
  },
  leftButton: {
    paddingLeft: 5,
  },
  backArrow: {
    paddingTop: 5,
    paddingLeft: 10,
  },
});

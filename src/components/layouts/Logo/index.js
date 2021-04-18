import React from 'react';
import { StyleSheet, View } from 'react-native';

import ImageIcon from '../../icons/ImageIcon';

import { icons } from '../../../resources/icons';

export default function Logo({
  height,
  width,
  white = false
}) {

  const logo = icons.LOGO.path;
  const logoWhite = icons.WHITE_LOGO.path;

  return (
    <View style={styles.container}>
      <ImageIcon 
          icon={white ? logoWhite : logo} 
          _width={width || 150} 
          _height={height || 150} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    height: 150,
    marginBottom: 38,
  },
});

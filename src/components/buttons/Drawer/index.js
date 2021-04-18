import React from 'react';
import { StyleSheet } from 'react-native';

import Button from '../Button';
import ImageIcon from '../../icons/ImageIcon';

import { icons } from '../../../resources/icons';

export default function Logo({
  height,
  width,
  navigation
}) {
    const toggleDrawer = () => {
        navigation.toggleDrawer();
    };

  return (
    <Button style={styles.container} action={toggleDrawer}>
      <ImageIcon icon={icons.DRAWER.path} _width={width || 150} _height={height || 150} />
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    height: 150,
    marginBottom: 38,
  },
});

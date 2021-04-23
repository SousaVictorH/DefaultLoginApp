import React from 'react';

import Button from '../Button';
import ImageIcon from '../../icons/ImageIcon';

import styles from './styles';

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

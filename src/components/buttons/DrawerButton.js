import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ImageIcon from '../icons/ImageIcon';
import Button from './Button';

import { DRAWER_BUTTON_ICON as drawerButtonWhite } from '../../resources/icons';

const DrawerButton = ({ size, navigation }) => {
  const defaultSize = 20;

  return (
    <Button
      action={() => navigation.toggleDrawer()}
      content={
        <ImageIcon
          icon={drawerButtonWhite}
          _width={size ? size : defaultSize}
        />
      }
    />
  );
};

export default DrawerButton;

const styles = StyleSheet.create({});

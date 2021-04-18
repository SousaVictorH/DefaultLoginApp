import React from 'react';

import ImageIcon from '../icons/ImageIcon';
import Button from './Button';

import { icons } from '../../resources/icons';

const DrawerButton = ({ size, navigation }) => {
  const defaultSize = 20;

  return (
    <Button
      action={() => navigation.toggleDrawer()}
      content={
        <ImageIcon
          icon={icons.DRAWER.path}
          _width={size ? size : defaultSize}
        />
      }
    />
  );
};

export default DrawerButton;

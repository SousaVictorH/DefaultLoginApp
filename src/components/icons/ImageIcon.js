import React from 'react';
import { Image } from 'react-native';

const ImageIcon = ({
  icon,
  uri,
  _height = '100%',
  _width = '100%',
  resizeMode = 'contain',
  alignSelf = 'center',
  style,
}) => {

  return(
    <Image
      source={icon ? icon : { uri }}
      style={[{ height: _height, width: _width, resizeMode, alignSelf }, style]}
    />
  );
};

export default ImageIcon;

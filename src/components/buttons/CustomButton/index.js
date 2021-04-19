import React from 'react';
import { StyleSheet } from 'react-native';

import Button from '../Button';
import ImageIcon from '../../icons/ImageIcon';

export default function Logo({
  height,
  width,
  onPress,
  icon
}) {

  return (
    <Button style={styles.container} action={onPress ? onPress : () => {}}>
      <ImageIcon icon={icon.path} _width={width || 150} _height={height || 150} />
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

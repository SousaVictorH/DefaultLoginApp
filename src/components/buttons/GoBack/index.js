import React from 'react';
import { StyleSheet } from 'react-native';

import Button from '../Button';
import ImageIcon from '../../icons/ImageIcon';

import { icons } from '../../../resources/icons';

import { goBack as GoBack } from '../../../interfaces/navigations';

export default function GoBackButton({
  height,
  width,
  navigation
}) {
    const goBack = () => {
        GoBack(navigation);
    };

  return (
    <Button style={styles.container} action={goBack} >
      <ImageIcon icon={icons.goBack} _width={width || 150} _height={height || 150} />
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

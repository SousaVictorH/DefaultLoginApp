import React from 'react';
import { StyleSheet, View } from 'react-native';

import ImageIcon from '../../../components/icons/ImageIcon';

import { icons } from '../../../resources/icons';

export default function Logo() {
  return (
    <View style={styles.container}>
      <ImageIcon icon={icons.logo} _width={150} _height={150} />
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import _Button from './Button';

import globalStyles from '../styles/globalStyles';

import { transparent, weightBlue } from '../../resources/colors';

export default function ButtonsScreen({ title, onPress }) {
  return (
    <_Button action={onPress}>
      <View style={[globalStyles.flexContainer, styles.titleContainer]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </_Button>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: transparent,
    borderColor: weightBlue,
    borderWidth: 2,
    borderRadius: 50,
    height: 40,
    width: 130,
  },
  title: {
    color: weightBlue,
    fontSize: 20,
    marginHorizontal: 18,
  },
});

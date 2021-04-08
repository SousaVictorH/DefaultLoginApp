import React from 'react';
import { StyleSheet, View } from 'react-native';

import BarBox from './BarBox';

import { white, darkBlue, lightBlue } from '../../resources/colors';

export default function BorderRadiusGradient({
  content,
  style,
  colors,
  backgroundColor = white,
  children,
}) {
  const contentArea = () => {
    return (
      <View style={style ? style : { ...styles.contentArea, backgroundColor }}>
        {content}
        {children}
      </View>
    );
  };

  return (
    <BarBox
      colors={colors ? colors : [darkBlue, lightBlue]}
      style={styles.border}
      content={contentArea()}
    />
  );
}

const styles = StyleSheet.create({
  border: {
    flex: 1,
    borderRadius: 15,
    padding: 1.5,
  },

  contentArea: {
    width: '100%',
    height: '100%',
    backgroundColor: white,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});

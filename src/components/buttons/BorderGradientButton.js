import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Button from './Button';
import { weightBlue } from '../../resources/colors';
import BorderRadiusGradient from '../boxes/BorderRadiusGradient';

export default function BorderGradientButton({
  label,
  disabled,
  onPress,
  style,
}) {
  const disabledStyle = { opacity: disabled ? 0.2 : 1 };

  return (
    <View style={[style || styles.container, disabledStyle]}>
      <Button
        action={onPress}
        style={[styles.buttonContainer]}
        disabled={disabled}>
        <BorderRadiusGradient>
          <Text style={styles.label}>{label}</Text>
        </BorderRadiusGradient>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 45,
  },
  container: {
    width: 150,
  },
  label: {
    color: weightBlue,
    fontSize: 16,
    fontWeight: '600',
  },
});

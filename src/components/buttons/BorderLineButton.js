import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { white } from '../../resources/colors';

const BorderlineButton = ({
  text,
  textColor = white,
  action,
  buttonStyle = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity onPress={action} style={[styles.button, buttonStyle]}>
      <Text style={[{ color: textColor }, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 30,
  },
});

export default BorderlineButton;

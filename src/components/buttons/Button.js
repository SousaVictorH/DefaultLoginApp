import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ content, style, action, children, disabled }) => (
  <TouchableOpacity
    disabled={disabled}
    activeOpacity={disabled ? 1 : 0.2}
    onPress={action}
    style={style || styles.container}>
    {content}
    {children}
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

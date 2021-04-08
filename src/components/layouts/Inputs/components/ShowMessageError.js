import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import globalStyles from '../../../styles/globalStyles';

const showMessageError = ({ error }) => {
  return error ? (
    <Text style={[globalStyles.messageError, styles.message]}>{error}</Text>
  ) : null;
};

export default showMessageError;

const styles = StyleSheet.create({
  message: {
    width: 230,
    alignSelf: 'flex-start',
    marginLeft: 35,
  },
});

import React from 'react';
import { StyleSheet, Text } from 'react-native';

import globalStyles from '../../../styles/globalStyles';

const showMessageError = ({
  error,
  style
}) => {
  return error ? (
    <Text style={[globalStyles.messageError, styles.message, style]}>{error}</Text>
  ) : null;
};

export default showMessageError;

const styles = StyleSheet.create({
  message: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    marginVertical: 5,
    marginLeft: 14,
  },
});

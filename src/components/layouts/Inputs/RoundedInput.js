import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

import {
  errorColor,
  heather,
  midGray
} from '../../../resources/colors';

import globalStyles from '../../styles/globalStyles';
import ShowMessageError from './components/ShowMessageError';

const InputTextGradient = ({
  icon,
  fieldName,
  placeholder,
  errorMessage,
  isSecured,
  value,
  onBlur,
  onChangeText,
  input50,
  inputStyles,
  labelStyles,
  error,
  ...inputProps
}) => {
  return (
    <View style={[input50 ? styles.input50 : styles.container]}>
      <Text style={[globalStyles.inputLabel, labelStyles]}>{fieldName}</Text>

      <View
        style={[
          styles.inputBox,
          error ? { borderColor: errorColor } : {},
          icon ? { paddingRight: 10 } : {}
        ]}>
          <TextInput
            placeholder={placeholder}
            secureTextEntry={isSecured}
            onBlur={onBlur}
            onChangeText={onChangeText}
            value={value}
            placeholderTextColor={errorMessage ? errorColor : heather}
            style={[styles.inputStyle, inputStyles, ]}
            {...inputProps}
          />
          {icon}
      </View>
      
      <ShowMessageError error={error}/>
    </View>
  );
};

export default InputTextGradient;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 5,
  },

  inputBox: {
    borderColor: midGray,
    borderWidth: 2,
    marginVertical: 8,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputStyle: {
    fontFamily: 'Product Sans Regular',
    fontSize: 16,
    paddingHorizontal: 15,
    width: '90%',
  },

  input50: {
    width: '40%',
    marginHorizontal: 6,
    marginVertical: 5,
  },
});
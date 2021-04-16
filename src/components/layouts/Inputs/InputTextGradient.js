import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

import BorderRadius from '../../boxes/BorderRadiusGradient';
import globalStyles from '../../styles/globalStyles';
import ShowMessageError from './components/ShowMessageError';

const InputTextGradient = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  onChangeText,
  onBlur,
  value,
  editable,
  autoCapitalize,
  multiline,
  style,
  label,
  messageError,
  onFocus,
  error,
  backgroundColor,
}) => {
  return (
    <View>
      <View style={[globalStyles.input, style]}>
        <BorderRadius backgroundColor={backgroundColor}>
          <View style={styles.container}>
            <TextInput
              onFocus={onFocus}
              multiline={multiline}
              autoCapitalize={autoCapitalize}
              label={label}
              editable={editable}
              placeholder={placeholder}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              allowFontScaling={true}
              onChangeText={onChangeText}
              onBlur={onBlur}
              value={value}
              inputContainerStyle={{}}
              style={styles.input}
            />
          </View>
        </BorderRadius>
      </View>

      <ShowMessageError error={error} message={messageError} />
    </View>
  );
};

export default InputTextGradient;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  input: {
    paddingLeft: 8
  },
  image: {
    position: 'absolute',
    top: 9,
    left: 5,
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
});

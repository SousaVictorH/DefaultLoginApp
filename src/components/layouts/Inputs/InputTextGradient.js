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
  icon
}) => {
  return (
    <View>
      <View style={[globalStyles.input, style]}>
        <BorderRadius style={styles.inputContainer} backgroundColor={backgroundColor}>
          <View style={styles.container}>
            {icon && <Image source={icon.path} style={styles.image} />}
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
              style={{ paddingLeft: icon ? 38 : 8 }}
            />
          </View>
        </BorderRadius>
      </View>

      <ShowMessageError error={error} message={messageError} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  image: {
    position: 'absolute',
    top: 9,
    left: 5,
    height: 18,
    width: 18,
    resizeMode: 'contain',
  }
});

export default InputTextGradient;

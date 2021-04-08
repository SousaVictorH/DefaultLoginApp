import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { darkBlue, lightBlue } from '../../resources/colors';

import globalStyles from '../styles/globalStyles';

export default function ButtonGradient({
  title = 'Submit',
  enabled = true,
  loading,
  onPress,
  colors,
  width,
  height,
}) {
  const enabledButton = {
    colors: colors ? colors : [darkBlue, lightBlue],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  };

  const desabledButton = {
    colors: ['gray', 'darkgray'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  };

  const stateButton = {
    disabled: !enabled,
    loading: !enabled,
    color: enabled ? enabledButton : desabledButton,
  };

  return (
    <View
      style={[
        globalStyles.buttonContainer,
        { width: width ? width : 150, height: height ? height : 40.5 },
      ]}>
      <Button
        TouchableComponent={TouchableOpacity}
        onPress={onPress}
        type={'solid'}
        disabled={stateButton.disabled}
        loading={loading ? stateButton.loading : false}
        title={title}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={stateButton.color}
        buttonStyle={{
          borderRadius: 20,
          width: '100%',
          height: '100%',
        }}
      />
    </View>
  );
}

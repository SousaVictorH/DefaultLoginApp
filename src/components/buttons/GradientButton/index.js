import React from 'react';

import { 
    ActivityIndicator, 
    Text, 
    View
} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import {
    darkBlue,
    lightBlue
} from '../../../resources/colors';

import styles from './styles';

const GradientButton = ({ text, disable, icon, onPress, loading }) => {
  const renderButton = () => (
    <TouchableOpacity
      disabled={disable}
      onPress={onPress}
      style={[
        styles.touchable,
        icon ? styles.withIcon : {},
        disable ? styles.disable : {},
        loading ? styles.loading : {},
      ]}>
      {!loading && (
        <>
          <Text style={styles.label}>{text}</Text>
          {icon}
        </>
      )}

      {loading && <ActivityIndicator size="large" color={darkBlue} />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.buttonArea}>
      {disable && <View style={styles.button}>{renderButton()}</View>}

      {!disable && (
        <LinearGradient colors={[darkBlue, lightBlue]} style={styles.button}>
          {renderButton()}
        </LinearGradient>
      )}
    </View>
  );
};

export default GradientButton;

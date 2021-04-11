import React from 'react';
import { View, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { darkBlue, lightBlue, white } from '../../../resources/colors';

import styles from './styles';
import globalStyles from '../../styles/globalStyles';

const Option = ({
  selected,
  label,
  error,
  size = 36,
  iconSize = 24,
  labelSize,
}) => {
  return (
    <View style={styles.container}>
      {selected ? (
        <LinearGradient
          colors={[darkBlue, lightBlue]}
          style={[
            styles.circle,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}>
          <View
            style={[
              styles.internal,
              {
                width: size - 3,
                height: size - 3,
                borderRadius: (size - 3) / 2,
              },
            ]}>
            <MaskedView
              maskElement={
                <View style={styles.maskedView}>
                  <Icon name="check" size={iconSize} color={white} />
                </View>
              }>
              <LinearGradient
                colors={[darkBlue, lightBlue]}
                style={[
                  styles.circle,
                  {
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                  },
                ]}
              />
            </MaskedView>
          </View>
        </LinearGradient>
      ) : error ? (
        <View
          style={[
            styles.circle,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
            styles.error,
          ]}
        />
      ) : (
        <View
          style={[
            styles.circle,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
            styles.neutral,
          ]}
        />
      )}
      <Text
        style={[
          globalStyles.inputLabel,
          labelSize ? { fontSize: labelSize } : {},
        ]}>
        {label}
      </Text>
    </View>
  );
};

export default Option;

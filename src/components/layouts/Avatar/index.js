import React from 'react';
import { View } from 'react-native';

import { Avatar } from 'react-native-elements';
import { white } from '../../../resources/colors';

import { darkBlue } from '../../../resources/colors';

export default function Avatars({
  uri,
  size = 'xlarge',
  border = 1.5,
  borderColor = darkBlue,
}) {
  return (
    <View>
      <Avatar
        size={size}
        rounded
        source={{ uri }}
        avatarStyle={{
          borderWidth: border,
          borderColor: borderColor,
          borderRadius: 500,
          backgroundColor: uri ? undefined : white,
        }}
      />
    </View>
  );
}

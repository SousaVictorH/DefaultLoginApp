import React from 'react';
import { ActivityIndicator } from 'react-native';

import { lightBlue } from '../../../resources/colors';

const Loading = ({
  color = lightBlue,
}) => {
  return <ActivityIndicator size="large" color={lightBlue} />;
};

export default Loading;

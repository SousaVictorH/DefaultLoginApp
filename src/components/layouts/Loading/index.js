import React from 'react';
import { ActivityIndicator } from 'react-native';

import { lightBlue } from '../../../resources/colors';

const Loading = () => {
  return <ActivityIndicator size="large" color={lightBlue} />;
};

export default Loading;

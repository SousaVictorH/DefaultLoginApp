import React from 'react';

import Button from '../Button';
import ImageIcon from '../../icons/ImageIcon';

import styles from './styles';

import { icons } from '../../../resources/icons';

import { goBack as GoBack } from '../../../interfaces/navigations';

export default function GoBackButton({
  height,
  width,
  navigation
}) {
    const goBack = () => {
        GoBack(navigation);
    };

  return (
    <Button style={styles.container} action={goBack} >
      <ImageIcon icon={icons.GO_BACK.path} _width={width || 150} _height={height || 150} />
    </Button>
  );
}

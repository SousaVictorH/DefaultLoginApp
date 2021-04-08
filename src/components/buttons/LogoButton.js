import React from 'react';

import ImageIcon from '../icons/ImageIcon';
import Button from './Button';

import { logoWhite } from '../../resources/images/layouts';
import { goToTopOfStack } from '../../interfaces/navigations';

const Logotipo = ({ size, navigation }) => {
  return (
    <Button
      content={<ImageIcon icon={logoWhite} _width={size ? size : '100%'} />}
    />
  );
};

export default Logotipo;

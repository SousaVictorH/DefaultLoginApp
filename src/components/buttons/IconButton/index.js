import React from 'react';

import Button from '../Button';
import ImageIcon from '../../icons/ImageIcon';

import styles from './styles';

const IconButton = ({
    style,
    action,
    icon
}) => {
    return(
        <Button style={style || styles.container} action={action}>
            <ImageIcon icon={icon} />
        </Button>
    );
}

export default IconButton;

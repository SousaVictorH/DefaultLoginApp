import React from 'react';

import Button from '../Button';
import ImageIcon from '../../icons/ImageIcon';

const IconButton = ({
    style,
    action,
    icon
}) => {
    return(
        <Button style={style} action={action}>
            <ImageIcon icon={icon} />
        </Button>
    );
}

export default IconButton;

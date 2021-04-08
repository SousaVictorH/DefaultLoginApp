import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Button } from 'react-native-elements';

import globalStyles from '../styles/globalStyles';
import ImageIcon from '../icons/ImageIcon';

import { NEXT_BUTTON as nextButton } from '../../resources/icons';

export default function ButtonClean({
  title = 'Submit',
  enabled = true,
  loading,
  onPress,
  hideNextIcon,
  style,
}) {
  const stateButton = {
    disabled: !enabled,
    loading: !enabled,
  };

  const renderImg = icon => {
    if (!loading) {
      return <ImageIcon icon={icon} _height={15} _width={15} />;
    }
  };

  return (
    <View style={style ? style : globalStyles.buttonContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          TouchableComponent={TouchableOpacity}
          onPress={onPress}
          title={title}
          type="clear"
          loading={loading ? stateButton.loading : false}
          disabled={stateButton.disabled}
        />

        {!hideNextIcon
          ? enabled
            ? renderImg(nextButton)
            : renderImg(nextButton)
          : null}
      </View>
    </View>
  );
}

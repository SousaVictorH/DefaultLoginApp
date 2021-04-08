import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ImageIcon from './ImageIcon';
import BorderRadiusGradient from '../boxes/BorderRadiusGradient';
import { darkBlue } from '../../resources/colors';

const Icon = ({ icon, size, showTitleIntoBorder = false }) => {
  const style = showTitleIntoBorder
    ? { height: 110, width: 95 }
    : { height: size, width: size };

  const RenderContent = () => (
    <View style={styles.contentContainer}>
      <ImageIcon _height={50} _width={50} icon={icon} />
      {showTitleIntoBorder && <Text style={styles.title}>{icon.title}</Text>}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={style}>
        <BorderRadiusGradient>
          <RenderContent />
        </BorderRadiusGradient>
      </View>
      {!showTitleIntoBorder && <Text style={styles.title}>{icon.title}</Text>}
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    width: 100,
    justifyContent: 'center',
  },

  contentContainer: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
  },

  title: {
    textAlign: 'center',
    fontSize: 12,
    color: darkBlue,
    marginTop: 5,
  },

  iconContainer: {
    height: '80%',
    width: '80%',
    alignSelf: 'center',
  },
});

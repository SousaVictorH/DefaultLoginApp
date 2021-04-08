import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import { darkGray, weightBlue } from '../../../resources/colors';

import BorderRadiusGradient from '../../boxes/BorderRadiusGradient';
import Button from '../../buttons/ButtonGradient';

function Banner({ title, text, buttonTitle, onPress, image }) {
  return (
    <View style={styles.container}>
      <BorderRadiusGradient>
        <View style={styles.content}>
          <View style={styles.aside}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.button}>
              <Button
                height={42}
                width={100}
                onPress={onPress}
                title={buttonTitle}
              />
            </View>
          </View>
          <View style={styles.image}>
            <ImageBackground
              style={styles.imageContainer}
              imageStyle={styles.imageBackground}
              source={image}
            />
          </View>
        </View>
      </BorderRadiusGradient>
    </View>
  );
}

export default Banner;

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: 340,
    alignSelf: 'center',
    marginVertical: 20,
  },
  content: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
  },
  aside: {
    height: '100%',
    width: '60%',
  },
  image: {
    height: '100%',
    width: '40%',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: ' 100%',
    resizeMode: 'stretch',
  },
  title: {
    color: weightBlue,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  text: {
    color: darkGray,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  button: {
    alignSelf: 'center',
  },
});

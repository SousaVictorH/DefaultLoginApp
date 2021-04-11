import { StyleSheet } from 'react-native';

import {
  red,
  green,
  darkBlue,
  darkGray,
  errorColor,
} from '../../resources/colors';

const globalStyles = StyleSheet.create({
  titleContainer: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  titleContainerItemSelected: {
    height: 50,
    backgroundColor: green,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: darkBlue,
    fontFamily: 'Product Sans Bold',
  },

  subTitle: {
    fontFamily: 'Product Sans Bold',
    fontSize: 14,
    textAlign: 'center',
    color: darkGray,
  },

  text: {
    fontFamily: 'Product Sans Bold',
    fontSize: 12,
    textAlign: 'justify',
  },

  messageError: {
    alignSelf: 'center',
    fontSize: 16,
    color: red,
  },

  input: {
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 30,
  },

  inputText: {
    width: '100%',
    height: '100%',
    fontFamily: 'Product Sans Bold',
    fontSize: 12,
    paddingHorizontal: 30,
  },

  buttonContainer: {
    width: 150,
    height: 50,
  },

  buttonForm: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginVertical: 10,
  },

  textButton: {
    fontSize: 14,
  },

  formContactUsContainer: {
    height: 550,
    width: '100%',
    marginBottom: 50,
  },

  flexContainer: {
    flexDirection: 'row',
  },

  backButtonContainer: {
    height: 30,
    marginVertical: 10,
  },

  inputLabel: {
    fontSize: 20,
    color: darkBlue,
    fontFamily: 'Product Sans Regular',
    marginLeft: 18,
  },

  errorMessage: {
    fontSize: 14,
    color: errorColor,
    marginLeft: 18,
    fontFamily: 'Product Sans Regular',
    marginBottom: 10,
  },
});

export default globalStyles;

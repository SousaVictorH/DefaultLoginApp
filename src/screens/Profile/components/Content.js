import React from 'react';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import {
    EDIT_USER,
    EDIT_PASSWORD
} from '../../../constants/screens';

import {
    EDIT_USER as EDIT_USER_TEXT,
    CHANGE_PASSWORD
} from '../../../constants/texts';

import { weightBlue, gray, lightBlue } from '../../../resources/colors';

import { goToScreen } from '../../../interfaces/navigations';

import Button from '../../../components/buttons/Button';

export default function Buttons({ navigation }) {
    const renderButton = (text, action) => (
        <Button style={styles.button} action={action}>
            <Text style={styles.text}>{text}</Text>
        </Button>
    );

    return (
        <View style={styles.container}>
            {renderButton(EDIT_USER_TEXT, () => goToScreen(navigation, EDIT_USER))}
            {renderButton(CHANGE_PASSWORD, () => goToScreen(navigation, EDIT_PASSWORD))}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
    alignItems: 'center',
  },
  button: {
    marginBottom: 40,
    borderBottomColor: gray,
    borderBottomWidth: 1,
    width: 105,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: weightBlue,
    textAlign: 'center',
    marginBottom: 5,
  }
});

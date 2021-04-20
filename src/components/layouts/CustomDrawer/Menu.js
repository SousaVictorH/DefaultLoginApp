import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import {
    EXIT,
    HOME,
    MY_PROFILE
} from '../../../constants/texts';

import {
    HOME_SCREEN,
    WELCOME_SCREEN,
    PROFILE_SCREEN
} from '../../../constants/screens';

import globalStyles from '../../styles/globalStyles';
import { black } from '../../../resources/colors';

import Button from '../../buttons/Button';

import { goToScreen } from '../../../interfaces/navigations';

import { useDispatch } from 'react-redux';
import * as ReduxActions from '../../../store/actions/auth';

// ACTIONS

const actionDispatchLogOut = (dispatch) => ({
    logOut: () => dispatch(ReduxActions.requestLogout())
});

const Menu = ({ navigation }) => {
    // LOGOUT
    const { logOut } = actionDispatchLogOut(useDispatch());

    const button = (title, screen) => (
        <View style={styles.buttonContainer}>
            <Button
                style={styles.button}
                action={() => action(screen)}
                content={renderItem(title)}
            />
        </View>
    );

    const action = (screen) => {
        if (screen === EXIT) {
            logOut();
            goToScreen(navigation, WELCOME_SCREEN);
        } else {
            goToScreen(navigation, screen);
        }
    };

    const renderItem = title => (
        <View>
            <Text style={[globalStyles.title, styles.titleButton]} >{title}</Text>
        </View>
    );

    return(
        <View style={styles.container}>
            {button(HOME, HOME_SCREEN)}
            {button(MY_PROFILE, PROFILE_SCREEN)}
            {button(EXIT, EXIT)}
        </View>
    );
};

export default Menu;

const styles = StyleSheet.create({
    container: {
        height: 500,
        width: 250,
    },
    buttonContainer: {
        marginVertical: 10,
    },
    button: {
      height: 50,
      justifyContent: 'center',
    },
    titleButton: {
      color: black,
    },
});
import React from 'react';

import {
    SafeAreaView,
    Text,
    StyleSheet,
    View
} from 'react-native';

import Button from '../../components/buttons/Button';
import BorderLineButton from '../../components/buttons/BorderLineButton';

import BarBoxGradient from '../../components/boxes/BorderRadiusGradient';

import {
    LOGIN_SCREEN,
    SIGN_UP_SCREEN,
} from '../../constants/screens';

import { goToScreen } from '../../interfaces/navigations';

import {
  LOGIN,
  DO_YOU_HAVE_ACCOUNT,
  I_DONT_HAVE_ACCOUNT
} from '../../constants/texts';

import { darkBlue, weightBlue, black } from '../../resources/colors';

export default function Welcome({ navigation }) {
    const goToLogin = () => {
        goToScreen(navigation, LOGIN_SCREEN);
    };

    const goToSignUp = () => {
        goToScreen(navigation, SIGN_UP_SCREEN);
    };

    const renderContent = () => (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title} >{DO_YOU_HAVE_ACCOUNT}</Text>

                <View style={styles.buttonLogin}>
                    <BorderLineButton text={LOGIN} textStyle={styles.textStyle} action={goToLogin} />
                </View>

                <Button style={styles.buttonRegister} action={goToSignUp} >
                    <Text style={styles.buttonText} >{I_DONT_HAVE_ACCOUNT}</Text>
                </Button>
            </View>
        </SafeAreaView>
    );

    return (
        <BarBoxGradient content={renderContent()} />
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    content: {
        width: 280,
        alignItems: 'center',
        marginTop: 240,
    },
    title: {
        color: darkBlue,
        fontSize: 28,
        fontWeight: '500',
        textAlign: 'center',
    },
    buttonLogin: {
        width: 200,
        marginTop: 65,
        marginBottom: 45,
    },
    buttonRegister: {
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 13,
        fontWeight: '400',
        textAlign: 'center',
        color: weightBlue,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        color: black,
        textTransform: 'uppercase',
    }
});
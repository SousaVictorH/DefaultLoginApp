import React from 'react'

import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { LOGIN_SCREEN } from '../../constants/screens';

import { goToScreen } from '../../interfaces/navigations';

import {
    GO_TO_LOGIN,
    EXPIRED_LOGIN
} from '../../constants/texts';

import {
    white,
    black,
    weightBlue,
    modalBackground
} from '../../resources/colors';

import BorderLineButton from '../../components/buttons/BorderLineButton';

const ModalError = ({
    isVisible,
    setIsVisible,
    navigation,
    screen
}) => {
    const goToLogin = () => {
        goToScreen(navigation, LOGIN_SCREEN, { screen });
        setIsVisible(false);
    };

    return (
        <Modal animationType="fade" visible={isVisible} transparent>
            <View style={styles.modalContainer}>
                <View style={styles.content}>

                    <Text style={styles.title}>{EXPIRED_LOGIN}</Text>

                    <TouchableOpacity onPress={goToLogin} >
                        <View style={styles.buttonLogin}>
                            <BorderLineButton text={GO_TO_LOGIN} textStyle={styles.textStyle} />
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    )
}

export default ModalError;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: modalBackground,
    },
    content: {
        height: 220,
        width: 350,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: white,
        borderColor: weightBlue,
        borderWidth: 1,
        borderRadius: 35,
    },
    title: {
        color: weightBlue,
        fontSize: 22,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: 30,
    },
    buttonLogin: {
        width: 250,
        marginTop: 65,
        marginBottom: 45,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        color: black,
        textTransform: 'uppercase',
    }
});
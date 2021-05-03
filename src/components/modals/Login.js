import React from 'react'

import {
    View,
    Text,
    Modal,
    StyleSheet
} from 'react-native';

import {
    white,
    black
} from '../../resources/colors';

import BorderLineButton from '../../components/buttons/BorderLineButton';

const ModalError = ({
    isVisible,
    setIsVisible,
    navigation
}) => {
    const goToLogin = () => {
        console.log('GO TO LOGIN');
        setIsVisible(false);
    };

    return (
        <Modal animationType="fade" visible={isVisible} transparent>
            <View style={styles.modalContainer}>

                <View style={styles.buttonLogin}>
                    <BorderLineButton text={'Go to login'} textStyle={styles.textStyle} action={goToLogin} />
                </View>

            </View>
        </Modal>
    )
}

export default ModalError;

const styles = StyleSheet.create({
    modalContainer: {
        height: 200,
        width: 350,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 255, 255, 0.5)',
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
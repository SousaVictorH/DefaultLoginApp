import React from 'react'

import {
    View,
    Text,
    Modal,
    StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    SORRY_AN_ERROR_OCCURED
} from '../../constants/errors';

import {
    white,
    weightBlue,
    black,
    modalBackground,
} from '../../resources/colors';

const ModalError = ({
    isVisible,
    setIsVisible,
}) => {

    return (
        <Modal animationType="fade" visible={isVisible} transparent>
            <View style={styles.modalContainer}>
                <View style={styles.content}>
                    <Icon
                        style={styles.button}
                        name={'close'}
                        color={black}
                        size={35}
                        onPress={() => setIsVisible(false)}
                    />

                    <Text style={styles.title}>{SORRY_AN_ERROR_OCCURED}</Text>
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
        color: black,
        fontSize: 21,
        fontWeight: '400',
        textAlign: 'center',
    },
    button: {
        position: 'absolute',
        right: 3,
        top: 3,
    }
});
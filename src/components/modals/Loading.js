import React from 'react'

import {
    View,
    Modal,
    StyleSheet
} from 'react-native';

import {
    modalBackground
} from '../../resources/colors';

import LoadingComponent from '../layouts/Loading';

const ModalLoading = ({
    isVisible
}) => {
    return (
        <Modal animationType="fade" visible={isVisible} transparent>
            <View style={styles.modal}>
                <LoadingComponent />
            </View>
        </Modal>
    )
}

export default ModalLoading;

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: modalBackground,
    }
});
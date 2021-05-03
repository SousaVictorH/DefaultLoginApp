import React from 'react'

import {
    View,
    Text,
    Modal,
    StyleSheet
} from 'react-native';

const ModalError = ({
    isVisible
}) => {
    return (
        <Modal animationType="fade" visible={isVisible} transparent>
            <View style={styles.modal}>
                <Text>ERROR</Text>
            </View>
        </Modal>
    )
}

export default ModalError;

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
});
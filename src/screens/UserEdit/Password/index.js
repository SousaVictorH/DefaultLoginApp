import React, { useState } from 'react';

import {
    View,
    StyleSheet,
    KeyboardAvoidingView
} from 'react-native';

import { useSelector } from 'react-redux';

import { requestPassUpdate } from '../../../interfaces/api';

import Loading from '../../../components/layouts/Loading';

import Form from '../../../components/Forms/Formiks/UserEdit/Password';
import ScreenLayout from '../../../components/layouts/ScreenLayout';

import ErrorModal from '../../../components/modals/Error';
import LoginModal from '../../../components/modals/Login';

const PasswordSwitch = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    // AUTH
    const auth = useSelector(state => state.auth);

    const { token, id } = auth.data;

    const requestUpdate = async (values) => {
        setLoading(true);
        try {
            const response = await requestPassUpdate({
                id: id,
                password: values.password,
                token: token,
            });

            if (response.error) {
                throw response.error;
            }
        } catch (error) {
            const statusCode = error.toJSON().message.split(' ')[5];

            if (statusCode === '401' || statusCode === '500') {
                setShowLoginModal(true);
            } else {
                setShowErrorModal(true);
            }
        }
        setLoading(false);
    };

    const renderScreen = () => (
        <KeyboardAvoidingView style={styles.container}>
            <ErrorModal isVisible={showErrorModal} />

            <LoginModal
                isVisible={showLoginModal}
                setIsVisible={setShowLoginModal}
                navigation={navigation}
            />

            <Form requestUpdate={requestUpdate} />
        </KeyboardAvoidingView>
    );

    if (loading) {
        return(      
            <View style={styles.loading}>
                <Loading />
            </View>
        );
    }

    return(
        <ScreenLayout 
            content={renderScreen()}
            navigation={navigation}
            hideHeader
            hideFooter
            scroll
        />
    );
};

export default PasswordSwitch;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loading: {
        marginTop: 300,
    }
});
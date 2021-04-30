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

const PasswordSwitch = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    // AUTH
    const auth = useSelector(state => state.auth);

    const { token, id } = auth.data;

    const requestUpdate = async (values) => {
        setLoading(true);
        try {
            const response = await requestPassUpdate(id, values.password, token);

            if (response.error) {
                throw response.error;
            }
        } catch (error) {
            if (error.toJSON().message === 'Request failed with status code 500') {
                alert('SEU LOGIN EXPIROU')
            } else {
                alert('LAMENTO UM ERRO OCORREU');
            }
        }
        setLoading(false);
    };

    const renderScreen = () => (
        <KeyboardAvoidingView style={styles.container}>
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
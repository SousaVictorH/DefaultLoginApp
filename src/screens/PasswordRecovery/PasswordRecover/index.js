import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
} from 'react-native';

import { requestAccountRecover } from '../../../interfaces/api';

import { goToScreen } from '../../../interfaces/navigations';
import { PASSWORD_SWITCH } from '../../../constants/screens';

import Loading from '../../../components/layouts/Loading';
import Form from '../../../components/Forms/Formiks/AccountRecover/Recover';

import BarBoxGradient from '../../../components/boxes/BorderRadiusGradient';
import FormLayout from '../../../components/layouts/FormLayout';

const PasswordRecover = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleRequestRecover = async (email) => {
        setLoading(true);
        try {
            const response = await requestAccountRecover(email);

            if (response.error) {
                throw response.error;
            }

            setError(false);

            goToScreen(navigation, PASSWORD_SWITCH, { email });
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };
  
      const renderContent = () => (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.formContainer}>

                <Form handleRequestRecover={handleRequestRecover} error={error} />

            </KeyboardAvoidingView>
        </View>
    );

    if (loading) {
        return (
          <View style={styles.loading}>
            <Loading />
          </View>
        );
    }
  
    return (
        <BarBoxGradient>
            <FormLayout 
                content={renderContent()}
                navigation={navigation}
            />
        </BarBoxGradient>
    )
};

export default PasswordRecover;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
        minWidth: '100%',
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: 300,
        height: 600,
        alignSelf: 'center',
        marginBottom: 100,
    },
    loading: {
        marginTop: 300,
    }
});

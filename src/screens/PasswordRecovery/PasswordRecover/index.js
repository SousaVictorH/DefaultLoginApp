import React from 'react';

import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
} from 'react-native';

import { requestAccountRecover } from '../../../interfaces/api';

import { goToScreen } from '../../../interfaces/navigations';
import { PASSWORD_SWITCH } from '../../../constants/screens';

import Form from '../../../components/Forms/Formiks/AccountRecover/Recover';

import BarBoxGradient from '../../../components/boxes/BorderRadiusGradient';
import FormLayout from '../../../components/layouts/FormLayout';

const PasswordRecover = ({ navigation }) => {

    const handleRequestRecover = async (email) => {
        await requestAccountRecover(email);

        goToScreen(navigation, PASSWORD_SWITCH);
    };
  
      const renderContent = () => (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.formContainer}>

                <Form 
                    handleRequestRecover={handleRequestRecover}
                />

            </KeyboardAvoidingView>
        </View>
    );
  
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
});

import React from 'react';

import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    KeyboardAvoidingView
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { requestLogin } from '../../interfaces/api';

import { SIGN_UP_SCREEN } from '../../constants/screens';
import { goToScreen } from '../../interfaces/navigations';

import { white, lightDarkBlue } from '../../resources/colors';

import BarBoxGradient from '../../components/boxes/BorderRadiusGradient';

import Button from '../../components/buttons/Button';
import Logo from './components/Logo';
import Form from '../../components/Forms/Formiks/FormLogin';

export default function Login({ navigation }) {
    const auth = useSelector(state => state.auth);

    const goToSignUp = () => {
        goToScreen(navigation, SIGN_UP_SCREEN);
    };

    const handleLogin = async (email, password) => {
        try {
            const response = await requestLogin(email, password);

            console.log(response);

            if (!response.error) {
                // envia para redux
            }
        } catch (error) {
            Alert.alert('Erro ao realizar login!');
        }
    };

    const renderContent = () => (
        <View style={styles.container}>
          <StatusBar hidden={true} />
  
          <KeyboardAvoidingView style={styles.formContainer}>
            <Logo />
  
            <Form handleLogin={handleLogin} />
  
            <Button style={styles.footer} action={goToSignUp}>
                <Text style={styles.span}>Novo aqui?</Text>
            </Button>
          </KeyboardAvoidingView>
        </View>
      );

    if (auth.loading) {
        return (
          <View style={styles.loading}>
            <Loading />
          </View>
        );
      }

    return (
        <BarBoxGradient content={renderContent()} />
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150,
        backgroundColor: white,
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: 300,
        height: 600,
        alignSelf: 'center',
        marginBottom: 100,
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        width: 150,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 25,
    },
    span: {
        fontSize: 12,
        color: lightDarkBlue,
    }
});
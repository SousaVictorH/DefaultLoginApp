import React from 'react';

import {
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView
} from 'react-native';

import BarBoxGradient from '../../components/boxes/BorderRadiusGradient';

import FormLayout from '../../components/layouts/FormLayout';

import Loading from '../../components/layouts/Loading';

import Button from '../../components/buttons/Button';
import Logo from '../../components/layouts/Logo';
import Form from '../../components/Forms/Formiks/Login/FormLogin';

import {
    NEW_HERE,
    FORGOT_PASSWORD
} from '../../constants/texts';

import { useSelector, useDispatch } from 'react-redux';
import * as ReduxActions from '../../store/actions/auth';

import { requestLogin } from '../../interfaces/api';

import { SIGN_UP_SCREEN, HOME_SCREEN } from '../../constants/screens';
import { goToScreen } from '../../interfaces/navigations';

import { white, lightDarkBlue, darkGray, gray } from '../../resources/colors';

// ACTIONS

const actionDispatchLoading = (dispatch) => ({
    loadingLogin: () => dispatch(ReduxActions.requestLogin())
});

const actionDispatchSucessLogin = (dispatch) => ({
    successLogin: (userData) => dispatch(ReduxActions.sucessLogin(userData))
});

const actionDispatchFailureLogin = (dispatch) => ({
    failureLogin: () => dispatch(ReduxActions.failureLogin())
});

export default function Login({ navigation }) {
    // LOADING 
    const { loadingLogin } = actionDispatchLoading(useDispatch());
    // SUCCESS
    const { successLogin } = actionDispatchSucessLogin(useDispatch());
    // FAILURE
    const { failureLogin } = actionDispatchFailureLogin(useDispatch());

    // AUTH
    const auth = useSelector(state => state.auth);
    // State
    const state = useSelector(state => state.signUp);

    console.log(state);

    const goToSignUp = () => {
        goToScreen(navigation, SIGN_UP_SCREEN);
    };

    const goToHome = () => {
        goToScreen(navigation, HOME_SCREEN);
    };

    const goToPasswordRecovery = () => {
        console.log('GO TO RECOVER');
    };

    const handleLogin = async (email, password) => {
        try {
            loadingLogin();

            const response = await requestLogin(email, password);

            if (response.error) {
                throw response.error;
            }

            successLogin(response.data);

            goToHome();
        } catch (error) {
            failureLogin();
        }
    };

    const renderContent = () => (
        <View style={styles.container}>

          <KeyboardAvoidingView style={styles.formContainer}>
            <View style={styles.logoContainer}>
                <Logo />
            </View>
  
            <Form handleLogin={handleLogin} navigation={navigation} />

            <Button style={styles.forgotPassword} action={goToPasswordRecovery}>
                <Text style={styles.forgotPasswordText}>{FORGOT_PASSWORD}</Text>
            </Button>
  
            <Button style={styles.newHere} action={goToSignUp}>
                <Text style={styles.newHereText}>{NEW_HERE}</Text>
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
        <BarBoxGradient>
            <FormLayout
                content={renderContent()}
                navigation={navigation}
            />
        </BarBoxGradient>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 120,
        backgroundColor: white,
    },
    logoContainer: {
        marginBottom: 10,
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: 300,
        height: 600,
        alignSelf: 'center',
        marginBottom: 100,
    },
    forgotPassword: {
        width: 150,
        alignSelf: 'center',
        marginTop: 12,
        paddingBottom: 3,

        borderBottomWidth: 1,
        borderBottomColor: gray,
    },
    forgotPasswordText: {
        textAlign: 'center',
        fontSize: 14,
        color: darkGray,
    },
    newHere: {
        height: 50,
        width: 150,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 25,
    },
    newHereText: {
        fontSize: 12,
        color: lightDarkBlue,
    },
    loading: {
        marginTop: 300,
    }
});
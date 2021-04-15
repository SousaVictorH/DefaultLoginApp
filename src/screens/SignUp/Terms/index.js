import React from 'react';

import {
    StyleSheet,
    View,
    StatusBar,
    KeyboardAvoidingView,
    ScrollView    
} from 'react-native';

import { LOGIN_SCREEN } from '../../../constants/screens';

import {
    REGISTER_USER_TERMS,
} from '../../../constants/texts';

import {
    requestSignUp
} from '../../../interfaces/api';

import { darkBlue } from '../../../resources/colors';

import BarBoxGradient from '../../../components/boxes/BorderRadiusGradient';
import Form from '../../../components/Forms/Formiks/SignUp/Terms';

import { goToScreen } from '../../../interfaces/navigations';

import { useSelector, useDispatch } from 'react-redux';

import {  } from 'react-redux';
import * as ReduxActions from '../../../store/actions/signUp';

const actionDispatch = (dispatch) => ({
  reset: () => dispatch(ReduxActions.reset())
});

export default function SignUp({ navigation }) {
    // RESET DATA
    const { reset } = actionDispatch(useDispatch());

    const state = useSelector(state => state.signUp);

    const handleSignUp = async () => {
      try {
          const response = requestSignUp(state);

          if (response?.error) {
            throw response.error;
          }

          reset();

          goToScreen(navigation, LOGIN_SCREEN);
      } catch (error) {
          console.warn(error);
      }
    };

    const renderContent = () => (
        <View style={styles.container}>
          <StatusBar hidden={true} />

          <ScrollView>
            <KeyboardAvoidingView style={styles.formContainer}>
              <Form handleSignUp={handleSignUp} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      );

    return (
        <BarBoxGradient content={renderContent()} scroll={true} />
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 50,
      height: '100%',
      width: '100%',
      
    },
    formContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      color: darkBlue,
      fontSize: 22,
      fontWeight: '500',
      textAlign: 'center',
      marginBottom: 25,
    },
    loading: {
      marginTop: 300,
    }
});
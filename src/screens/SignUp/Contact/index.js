import React from 'react';

import {
    StyleSheet,
    View, 
} from 'react-native';

import { SIGN_UP_ADDRESS_SCREEN } from '../../../constants/screens';

import FormLayout from '../../../components/layouts/FormLayout';

import { darkBlue } from '../../../resources/colors';

import BarBoxGradient from '../../../components/boxes/BorderRadiusGradient';
import Form from '../../../components/Forms/Formiks/SignUp/Contact';

import { goToScreen } from '../../../interfaces/navigations';

import { useDispatch, useSelector } from 'react-redux';
import * as ReduxActions from '../../../store/actions/signUp';

const actionDispatch = (dispatch) => ({
  sendData: (data) => dispatch(ReduxActions.updateState(data))
});

export default function SignUp({ navigation }) {
    // SEND DATA
    const { sendData } = actionDispatch(useDispatch());

    const state = useSelector(state => state.signUp);

    const handleSignUp = async (values) => {
      try {
          sendData(values);

          goToScreen(navigation, SIGN_UP_ADDRESS_SCREEN);
      } catch (error) {
          console.warn(error);
      }
    };

    const renderForm = () => (
      <Form handleSignUp={handleSignUp} state={state} />
    );

    const renderContent = () => (
        <View style={styles.container}>

            <FormLayout 
                content={renderForm()}
                scroll
                navigation={navigation}
            />
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
});
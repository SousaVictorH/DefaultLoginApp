import React from 'react';

import {
    StyleSheet,
    View,
} from 'react-native';

import { SIGN_UP_TERMS_SCREEN } from '../../../constants/screens';

import FormLayout from '../../../components/layouts/FormLayout';

import { darkBlue } from '../../../resources/colors';

import BarBoxGradient from '../../../components/boxes/BorderRadiusGradient';
import Form from '../../../components/Forms/Formiks/SignUp/Address';

import { goToScreen } from '../../../interfaces/navigations';

import { useDispatch } from 'react-redux';
import * as ReduxActions from '../../../store/actions/signUp';

const actionDispatch = (dispatch) => ({
  sendData: (data) => dispatch(ReduxActions.updateState(data))
});

export default function SignUp({ navigation }) {
    // SEND DATA
    const { sendData } = actionDispatch(useDispatch());

    const handleSignUp = async (values) => {
      try {
          sendData(values);

          goToScreen(navigation, SIGN_UP_TERMS_SCREEN);
      } catch (error) {
          console.warn(error);
      }
    };

    const renderForm = () => (
      <Form handleSignUp={handleSignUp} navigation={navigation} />
    )

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
      minHeight: '100%',
      minWidth: '100%',
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

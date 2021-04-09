import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    KeyboardAvoidingView
} from 'react-native';

import { LOGIN_SCREEN } from '../../constants/screens';

import {
    REGISTER,
} from '../../constants/texts';

import { requestSignUp } from '../../interfaces/api';

import BarBoxGradient from '../../components/boxes/BorderRadiusGradient';
import Form from '../../components/Forms/Formiks/FormSignUp';

import { goToScreen } from '../../interfaces/navigations';

export default function SignUp({ navigation }) {

    const handleSignUp = async (values) => {
      try {
          const response = await requestSignUp(values);

          if (!response.error) {
              goToScreen(navigation, LOGIN_SCREEN);
          }

          console.warn('Error on SingUp');
      } catch (error) {

      }
    };

    const renderContent = () => (
        <View style={styles.container}>
          <StatusBar hidden={true} />
  
          <KeyboardAvoidingView style={styles.formContainer}>
  
            <Text style={styles.title}>{REGISTER}</Text>

            <Form handleSignUp={handleSignUp} />
          </KeyboardAvoidingView>
        </View>
      );

    return (
        <BarBoxGradient content={renderContent()} scroll={true} />
    )
};

const styles = StyleSheet.create({
    container: {

    },
    title: {

    },
    button: {

    }
});
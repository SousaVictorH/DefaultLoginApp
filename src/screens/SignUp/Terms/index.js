import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    KeyboardAvoidingView,
    ScrollView    
} from 'react-native';

import { LOGIN_SCREEN } from '../../../constants/screens';

import {
    REGISTER_USER_TERMS,
} from '../../../constants/texts';

import { darkBlue } from '../../../resources/colors';

import BarBoxGradient from '../../../components/boxes/BorderRadiusGradient';
import Form from '../../../components/Forms/Formiks/SignUp/Terms';

import { goToScreen } from '../../../interfaces/navigations';

export default function SignUp({ navigation }) {
    const handleSignUp = async (values) => {
      try {
          // REQ SIGNUP
          console.log(values);

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
              <Text style={styles.title}>{REGISTER_USER_TERMS}</Text>

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
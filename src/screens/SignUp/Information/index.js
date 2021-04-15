import React, { useState } from 'react';

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
    REGISTER,
} from '../../../constants/texts';

import { darkBlue } from '../../../resources/colors';

import { requestSignUp } from '../../../interfaces/api';

import Loading from '../../../components/layouts/Loading';
import BarBoxGradient from '../../../components/boxes/BorderRadiusGradient';
import Form from '../../../components/Forms/Formiks/FormSignUp';

import { goToScreen } from '../../../interfaces/navigations';

export default function SignUp({ navigation }) {
    const [loading, setLoading] = useState(false);

    const handleSignUp = async (values) => {
      try {

          setLoading(true);
          const response = await requestSignUp(values);
          setLoading(false);

          if (response.error) {
              throw response.error;
          }

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
              <Text style={styles.title}>{REGISTER}</Text>

              <Form handleSignUp={handleSignUp} />
            </KeyboardAvoidingView>
          </ScrollView>
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
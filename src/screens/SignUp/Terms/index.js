import React, { useState } from 'react';

import {
    StyleSheet,
    View,
} from 'react-native';

import { LOGIN_SCREEN } from '../../../constants/screens';

import FormLayout from '../../../components/layouts/FormLayout';

import {
    requestSignUp
} from '../../../interfaces/api';

import { darkBlue } from '../../../resources/colors';

import BarBoxGradient from '../../../components/boxes/BorderRadiusGradient';
import Form from '../../../components/Forms/Formiks/SignUp/Terms';

import Loading from '../../../components/layouts/Loading';

import { goToScreen } from '../../../interfaces/navigations';

import { useSelector, useDispatch } from 'react-redux';
import * as ReduxActions from '../../../store/actions/signUp';

const actionDispatch = (dispatch) => ({
  reset: () => dispatch(ReduxActions.reset())
});

export default function SignUp({ navigation }) {
    const [loading, setLoading] = useState(false);

    // RESET DATA
    const { reset } = actionDispatch(useDispatch());

    const state = useSelector(state => state.signUp);

    const handleSignUp = async () => {
      setLoading(true);
      try {
          const response = requestSignUp(state);

          if (response?.error) {
            throw response.error;
          }

          reset();

          goToScreen(navigation, LOGIN_SCREEN);
      } catch (error) {
          alert('Error');
          console.log(error);
      }
      setLoading(false);
    };

    const renderForm = () => (
      <Form handleSignUp={handleSignUp} navigation={navigation} />
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

    if (loading) {
        return(
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
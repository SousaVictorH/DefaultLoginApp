import React, { useState } from 'react';

import {
    StyleSheet,
    View,
} from 'react-native';

import { LOGIN_SCREEN } from '../../../constants/screens';

import {
    CHECK_YOUR_DATA,
    USER_ALREADY_EXIST
} from '../../../constants/errors';

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

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // RESET DATA
    const { reset } = actionDispatch(useDispatch());

    const state = useSelector(state => state.signUp);

    const handleSignUp = async () => {
      setLoading(true);
      try {
          const response = await requestSignUp(state);

          console.log(response);

          if (response?.error) {
            throw response.error;
          }

          setError(false);

          reset();

          goToScreen(navigation, LOGIN_SCREEN);
      } catch (error) {
          setError(true);
          const statusCode = error.toJSON().message.split(' ')[5];

          if (statusCode === '400') {
              setErrorMessage(USER_ALREADY_EXIST);
          } else {
              setErrorMessage(CHECK_YOUR_DATA);
          }
      }
      setLoading(false);
    };

    const renderForm = () => (
      <Form handleSignUp={handleSignUp} error={error} errorMessage={errorMessage} />
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
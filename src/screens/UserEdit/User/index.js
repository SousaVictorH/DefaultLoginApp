import React, { useState } from 'react';

import {
    View,
    StyleSheet,
    KeyboardAvoidingView
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import * as ReduxActions from '../../../store/actions/auth';

import { requestUserUpdate } from '../../../interfaces/api';

import Loading from '../../../components/layouts/Loading';

import Form from '../../../components/Forms/Formiks/UserEdit/Information';
import ScreenLayout from '../../../components/layouts/ScreenLayout';

const actionDispatch = (dispatch) => ({
    updateState: (data) => dispatch(ReduxActions.updateState(data))
});

const AddressSwitch = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    // UPDATE 
    const { updateState } = actionDispatch(useDispatch());

    // AUTH
    const auth = useSelector(state => state.auth);

    const { token, id } = auth.data;

    const requestUpdate = async (values) => {
        setLoading(true);
        try {
            values.id = id;
            values.token = token;

            const response = await requestUserUpdate(values);

            if (response.error) {
                throw response.error;
            } else {
                const obj = Object.assign({}, auth.data, values);

                updateState(obj);
            }
        } catch (error) {
            console.log(error);
            alert('Error')
        }
        setLoading(false);
    };

    const renderScreen = () => (
        <KeyboardAvoidingView style={styles.container}>
            <Form requestUpdate={requestUpdate} auth={auth} />
        </KeyboardAvoidingView>
    );

    if (loading) {
        return(      
            <View style={styles.loading}>
                <Loading />
            </View>
        );
    }

    return(
        <ScreenLayout 
            content={renderScreen()}
            navigation={navigation}
            hideHeader
            hideFooter
            scroll
        />
    );
};

export default AddressSwitch;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loading: {
        marginTop: 300,
    }
});
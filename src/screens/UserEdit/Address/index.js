import React, { useState } from 'react';

import {
    StyleSheet,
    KeyboardAvoidingView
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import * as ReduxActions from '../../../store/actions/auth';

import { requestAddressUpdate } from '../../../interfaces/api';

import {
    PROFILE_SCREEN
} from '../../../constants/screens';

import Form from '../../../components/Forms/Formiks/UserEdit/Address';
import ScreenLayout from '../../../components/layouts/ScreenLayout';

import ErrorModal from '../../../components/modals/Error';
import LoginModal from '../../../components/modals/Login';
import LoadingModal from '../../../components/modals/Loading';

const actionDispatch = (dispatch) => ({
    updateState: (data) => dispatch(ReduxActions.updateState(data))
});

const AddressSwitch = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

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

            const response = await requestAddressUpdate(values);

            if (response.error) {
                throw response.error;
            } else {
                const address = { address: { 
                    street: values.street,
                    city: values.city,
                    zipCode: values.zipCode,
                    district: values.district,
                    complement: values.complement,
                    uf: values.uf,
                    number: values.number
                 } };

                const obj = Object.assign({}, auth.data, address);

                updateState(obj);
            }
        } catch (error) {
            const statusCode = error.toJSON().message.split(' ')[5];

            if (statusCode === '401' || statusCode === '500') {
                setShowLoginModal(true);
            } else {
                setShowErrorModal(true);
            }
        }
        setLoading(false);
    };

    const renderScreen = () => (
        <KeyboardAvoidingView style={styles.container}>
            <ErrorModal isVisible={showErrorModal} setIsVisible={setShowErrorModal} />

            <LoginModal
                isVisible={showLoginModal}
                setIsVisible={setShowLoginModal}
                navigation={navigation}
                screen={PROFILE_SCREEN}
            />

            <LoadingModal isVisible={loading} />

            <Form requestUpdate={requestUpdate} auth={auth} />
        </KeyboardAvoidingView>
    );

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
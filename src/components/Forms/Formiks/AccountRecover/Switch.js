import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Formik } from 'formik';

import validations from '../../../../resources/validations/Recover/recoverPasswordSchema';

import {
    weightBlue,
    lightDarkBlue
} from '../../../../resources/colors';

import { 
    SUBMIT,
    RECOVER_PASSWORD
} from '../../../../constants/texts';

import ShowMessageError from '../../../layouts/Inputs/components/ShowMessageError';

import { CHECK_YOUR_DATA } from '../../../../constants/errors';

import Logo from '../../../layouts/Logo';

import Button from '../../../buttons/ButtonGradient';
import Switch from '../../Forms/AccountRecover/Switch';

const RecoverForm = ({ handleRequestSwitch, error }) => {
    return(
        <View>
            <Formik 
                initialValues={{ token: '', password: '', confirmPassword: '' }}
                validationSchema={validations}
                onSubmit={values => {
                    handleRequestSwitch(values);
                }}>
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    touched,
                    errors,
                }) => (
                <View>
                    <Logo width={140} />
                    
                    <View style={styles.container}>
                        <Text style={styles.title}>{RECOVER_PASSWORD}</Text>
                    </View>

                    <Switch
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                    />

                    {error && <ShowMessageError error={CHECK_YOUR_DATA} style={styles.error} />}

                    <View style={styles.button}>
                        <Button 
                            onPress={handleSubmit} 
                            title={SUBMIT} 
                        />
                    </View>
                </View>
                )}
            </Formik>
        </View>
    );
};

export default RecoverForm;

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    title: {
        color: weightBlue,
        fontSize: 18,
        fontWeight: '500',
    },
    text: {
        color: lightDarkBlue,
        fontSize: 13,
        fontWeight: '500',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    error: {
        marginLeft: 35,
    }
});
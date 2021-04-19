import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Formik } from 'formik';

import validations from '../../../../resources/validations/switchSchema';

import {
    weightBlue,
    lightDarkBlue
} from '../../../../resources/colors';

import { 
    SUBMIT,
    RECOVER_PASSWORD
} from '../../../../constants/texts';

import Logo from '../../../layouts/Logo';

import Button from '../../../buttons/ButtonGradient';
import Switch from '../../Forms/AccountRecover/Switch';

const RecoverForm = ({ handleRequestSwitch }) => {
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
    }
});
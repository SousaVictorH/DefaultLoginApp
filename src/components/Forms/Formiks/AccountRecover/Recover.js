import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Formik } from 'formik';

import validations from '../../../../resources/validations/recoverSchema';

import {
    weightBlue,
    lightDarkBlue
} from '../../../../resources/colors';

import { 
    ADVANCE,
    RECOVER_PASSWORD,
    HOW_RECOVER
} from '../../../../constants/texts';

import Logo from '../../../layouts/Logo';

import Button from '../../../buttons/ButtonGradient';
import Recover from '../../Forms/AccountRecover/Recover';

const RecoverForm = ({ handleRequestRecover }) => {
    return(
        <View>
            <Formik 
                initialValues={{ email: '' }}
                validationSchema={validations}
                onSubmit={values => {
                    handleRequestRecover(values.email);
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
                    <Logo width={180} />
                    
                    <View style={styles.container}>
                        <Text style={styles.title}>{RECOVER_PASSWORD}</Text>
                        <Text style={styles.text}>{HOW_RECOVER}</Text>
                    </View>

                    <Recover
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                    />

                    <View style={styles.button}>
                        <Button 
                            onPress={handleSubmit} 
                            title={ADVANCE} 
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
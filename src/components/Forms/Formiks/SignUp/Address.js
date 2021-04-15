import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Formik } from 'formik';

import Button from '../../../buttons/ButtonGradient';
import { validateAddress as validations } from '../../../../resources/validations/signUpSchema';

import { objIsEmpty } from '../../../../utils/object';

import { 
    ADVANCE,
    RESIDENTIAL_DATA
} from '../../../../constants/texts';

import {
    weightBlue
} from '../../../../resources/colors';

import SignUpAddress from '../../Forms/SignUp/Address';

const FormLogin = ({ handleSignUp }) => {
    const [loading, setLoading] = useState(false);

    return(
        <View>
            <Formik 
                initialValues={{
                    zipCode: '',
                    city: '',
                    uf: '',
                    street: '',
                    district: '',
                    number: '',
                    complement: '',
                }}
                validationSchema={validations}
                onSubmit={values => {
                    handleSignUp(values);
                }}>
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    touched,
                    errors,
                    setFieldError,
                    setFieldValue,
                }) => (
                <View style={styles.container}>

                    <Text style={styles.title}>{RESIDENTIAL_DATA}</Text>
                    
                    <SignUpAddress
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                        setFieldError={setFieldError}
                        setFieldValue={setFieldValue}
                    />

                    <View style={styles.button}>
                        <Button 
                            onPress={handleSubmit} 
                            title={ADVANCE} 
                            enabled={objIsEmpty(errors)}
                        />
                    </View>
                </View>
                )}
            </Formik>
        </View>
    );
};

export default FormLogin;

const styles = StyleSheet.create({
    container: {
        width: 300,
        marginTop: 10,
    },
    title: {
        fontSize: 22,
        marginBottom: 15,
        textAlign: 'center',
        color: weightBlue,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25,
    },
});
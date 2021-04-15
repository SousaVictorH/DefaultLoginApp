import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Formik } from 'formik';

import Button from '../../../buttons/ButtonGradient';
import { validateAddress as validations } from '../../../../resources/validations/signUpSchema';

import { objIsEmpty } from '../../../../utils/object';

import { ADVANCE } from '../../../../constants/texts';

import SignUpAddress from '../../Forms/SignUp/Address';

const FormLogin = ({ handleSignUp }) => {
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
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25,
    }
});
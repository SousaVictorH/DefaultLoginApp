import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import {
    SIGN_UP_SCREEN,
    SIGN_UP_CONTACT_SCREEN,
    SIGN_UP_ADDRESS_SCREEN,
    SIGN_UP_TERMS_SCREEN
} from '../constants/screens';

import SignUpInformation from '../screens/SignUp/Information';
import SignUpContact from '../screens/SignUp/Contact';
import SignUpAddress from '../screens/SignUp/Address';
import SignUPTerms from '../screens/SignUp/Terms';

export function SignUpNavigation() {
    return(
        <Stack.Navigator>

            <Stack.Screen 
                name={SIGN_UP_SCREEN}
                component={SignUpInformation}
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name={SIGN_UP_CONTACT_SCREEN}
                component={SignUpContact}
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name={SIGN_UP_ADDRESS_SCREEN}
                component={SignUpAddress}
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name={SIGN_UP_TERMS_SCREEN}
                component={SignUPTerms}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}
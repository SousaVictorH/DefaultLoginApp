import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import {
    SIGN_UP_SCREEN,
    SIGN_UP_CONTACT_SCREEN,
    SIGN_UP_ADDRESS_SCREEN,
    SIGN_UP_TERMS_SCREEN,
    PASSWORD_RECOVER,
    PASSWORD_SWITCH,
    PASSWORD_RECOVERED,
    EDIT_USER,
    EDIT_ADDRESS,
    EDIT_PASSWORD,
    PROFILE_SCREEN
} from '../constants/screens';

import SignUpInformation from '../screens/SignUp/Information';
import SignUpContact from '../screens/SignUp/Contact';
import SignUpAddress from '../screens/SignUp/Address';
import SignUPTerms from '../screens/SignUp/Terms';

import PasswordRecover from '../screens/PasswordRecovery/PasswordRecover';
import PasswordSwitch from '../screens/PasswordRecovery/PasswordSwitch';
import PasswordRecovered from '../screens/PasswordRecovery/PasswordRecovered';

import Profile from '../screens/Profile';

import UserEdit from '../screens/UserEdit/User';
import PasswordEdit from '../screens/UserEdit/Password';
import AddressEdit from '../screens/UserEdit/Address';

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

export function PasswordRecoverNavigation() {
    return(
        <Stack.Navigator>

            <Stack.Screen 
                name={PASSWORD_RECOVER}
                component={PasswordRecover}
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name={PASSWORD_SWITCH}
                component={PasswordSwitch}
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name={PASSWORD_RECOVERED}
                component={PasswordRecovered}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}

export function ProfileNavigation() {
    return(
        <Stack.Navigator>

            <Stack.Screen 
                name={PROFILE_SCREEN}
                component={Profile}
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name={EDIT_USER}
                component={UserEdit}
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name={EDIT_PASSWORD}
                component={PasswordEdit}
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name={EDIT_ADDRESS}
                component={AddressEdit}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}
import React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import { useSelector } from 'react-redux';

import {
    HOME_SCREEN,
    LOGIN_SCREEN,
    SIGN_UP_SCREEN,
    WELCOME_SCREEN,
    PASSWORD_RECOVER,
    PROFILE_SCREEN,
    EDIT_USER,
    EDIT_PASSWORD,
    EDIT_ADDRESS
} from '../constants/screens';

import { transparent } from '../resources/colors';

import CustomDrawer from '../components/layouts/CustomDrawer';

import {
    SignUpNavigation,
    PasswordRecoverNavigation
} from './stackNavigation';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';

import Profile from '../screens/Profile';

import UserEdit from '../screens/UserEdit/User';
import PasswordEdit from '../screens/UserEdit/Password';
import AddressEdit from '../screens/UserEdit/Address';

const DrawerNavigation = () => {
    const auth = useSelector(state => state.auth);

    return (
        <Drawer.Navigator
          initialRouteName={auth.logged ? HOME_SCREEN : WELCOME_SCREEN}
          drawerContent={CustomDrawer}
          drawerStyle={[{ backgroundColor: transparent }, styles.drawer]}
        >

            <Drawer.Screen name={HOME_SCREEN} component={auth.logged ? Home : Welcome} />
            <Drawer.Screen name={LOGIN_SCREEN} component={Login} />
            <Drawer.Screen name={WELCOME_SCREEN} component={auth.logged ? Home : Profile} />

            <Drawer.Screen name={PROFILE_SCREEN} component={auth.logged ? Profile : Home} />

            <Drawer.Screen name={SIGN_UP_SCREEN} component={SignUpNavigation} />
            <Drawer.Screen name={PASSWORD_RECOVER} component={PasswordRecoverNavigation} />

            <Drawer.Screen name={EDIT_USER} component={auth.logged ? UserEdit : Home} />
            <Drawer.Screen name={EDIT_PASSWORD} component={auth.logged ? PasswordEdit : Home} />
            <Drawer.Screen name={EDIT_ADDRESS} component={auth.logged ? AddressEdit : Home} />

        </Drawer.Navigator>
    );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  drawer: {
    width: 280,
    height: '80%',
    marginTop: 60,
  },
});

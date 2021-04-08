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
} from '../constants/screens';

import { transparent } from '../resources/colors';

import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Welcome from '../screens/Welcome';

const DrawerNavigation = () => {
    const auth = useSelector(state => state.auth);

    return (
        <Drawer.Navigator
        initialRouteName={auth.logged ? HOME_SCREEN : WELCOME_SCREEN}
        drawerStyle={[{ backgroundColor: transparent }, styles.drawer]}>

            <Drawer.Screen name={HOME_SCREEN} component={Home} />
            <Drawer.Screen name={LOGIN_SCREEN} component={Login} />
            <Drawer.Screen name={SIGN_UP_SCREEN} component={SignUp} />
            <Drawer.Screen name={WELCOME_SCREEN} component={Welcome} />

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

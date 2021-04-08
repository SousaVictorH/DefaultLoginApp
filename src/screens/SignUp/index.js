import React from 'react';

import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import BarBoxGradient from '../../components/boxes/BorderRadiusGradient';

import { goToScreen } from '../../interfaces/navigations';

export default function SignUp({ navigation }) {

    const renderContent = () => (
        <View>
            <Text>
                SignUp
            </Text>
        </View>
    );

    return (
        <BarBoxGradient content={renderContent()} scroll={true} />
    )
};
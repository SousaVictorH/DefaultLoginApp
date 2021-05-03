import React from 'react';

import {
    Text,
    SafeAreaView,
    StyleSheet
} from 'react-native';

import { white } from '../../../resources/colors';

import BarBox from '../../boxes/BarBox';

export default Footer = ({ hideFooter }) => {
    return !hideFooter && (
        <BarBox>
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>
                    Footer
                </Text>
            </SafeAreaView>
        </BarBox>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        color: white,
    }
});
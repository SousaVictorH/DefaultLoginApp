import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import BarBox from '../../boxes/BarBox';

import Logo from '../Logo';
import Drawer from '../Drawer';

export default Header = ({ hideHeader, navigation }) => {
    return !hideHeader && (
        <BarBox>
            <SafeAreaView style={styles.container}>
                <Logo height={28} width={28} />
                <Drawer height={28} width={28} navigation={navigation} />
            </SafeAreaView>
        </BarBox>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 18,
    }
});

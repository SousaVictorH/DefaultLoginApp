import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import BarBox from '../../boxes/BarBox';

import Logo from '../Logo';
import Drawer from '../../buttons/Drawer';

export default Header = ({ hideHeader, navigation }) => {
    return !hideHeader && (
        <BarBox>
            <SafeAreaView style={styles.container}>
                <Drawer height={28} width={28} navigation={navigation} />
                <Logo height={28} width={28} white />
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

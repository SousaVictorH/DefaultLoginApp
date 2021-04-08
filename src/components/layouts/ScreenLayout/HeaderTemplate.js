import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import BarBox from '../../boxes/BarBox';

export default Header = ({ hideHeader }) => {
    return !hideHeader && (
        <BarBox>
            <SafeAreaView style={styles.container}>
                <Text>
                    HEADER
                </Text>
            </SafeAreaView>
        </BarBox>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

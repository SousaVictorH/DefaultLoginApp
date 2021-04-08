import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import BarBox from '../../boxes/BarBox';

export default Footer = ({ hideFooter }) => {
    return !hideFooter && (
        <BarBox>
            <SafeAreaView style={styles.container}>
                <Text>
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
    }
});
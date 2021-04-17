import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import GoBackIcon from '../GoBack/index';

export default Header = ({ hideHeader, navigation }) => {
    return !hideHeader && (
        <View>
            <SafeAreaView style={styles.container}>
                <GoBackIcon height={28} width={28} navigation={navigation} />
            </SafeAreaView>
        </View>
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

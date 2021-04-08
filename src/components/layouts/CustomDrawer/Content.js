import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Menu from './Menu';

const Content = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <ScrollView>
                <Menu
                    navigation={navigation}
                />
            </ScrollView>
        </View>
    );
}

export default Content;

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      paddingTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
});
  
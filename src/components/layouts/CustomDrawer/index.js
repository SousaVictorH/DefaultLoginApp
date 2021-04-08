import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import BarBox from '../../boxes/BarBox';
import Content from './Content';

import { white, lightGray } from '../../../resources/colors';

const CustomDrawer = ({ navigation }) => {
    
    return(
        <View>
            <BarBox
              style={styles.background}
              content={<Content navigation={navigation} />}
              colors={[white, lightGray]}
            />
        </View>
    );
};

export default CustomDrawer;

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: 'red'
    },
  
    background: {
      height: '100%',
      width: '100%',
      borderBottomRightRadius: 70,
    },
  });
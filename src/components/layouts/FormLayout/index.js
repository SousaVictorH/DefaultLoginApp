import React from 'react';

import {
  StyleSheet,
  View,
  Platform,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import BarBox from '../../boxes/BarBox';

import Loading from '../Loading';

import { black, white } from '../../../resources/colors';

import {
  IOS_HEADER_HEIGHT,
  ANDROID_HEADER_HEIGHT,
} from '../../styles/constants';

import Header from './HeaderTemplate';

const FormLayout = ({
  content,
  scroll,
  hideHeader,
  loading,
  navigation
}) => {
  const body = () => {
    if (scroll) {
      return <ScrollView>{content}</ScrollView>;
    }
    return content;
  };

  return (
    <View style={styles.container}>

      {Platform.OS === 'ios' && (
        <View style={{ height: 50 }}>
          <BarBox />
        </View>
      )}

      <SafeAreaView>
        <View style={[styles.headerContainer, { display: hideHeader ? 'none' : 'flex'}]}>
          <Header hideHeader={hideHeader} navigation={navigation} />
        </View>

        <View style={styles.bodyContainer}>
          {loading ? <Loading /> : body()}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default FormLayout;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
    minWidth: '90%',
    maxHeight: Platform.OS === 'ios' ? IOS_HEADER_HEIGHT : ANDROID_HEADER_HEIGHT - 12,
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: white,
    marginBottom: 25,
  },
});

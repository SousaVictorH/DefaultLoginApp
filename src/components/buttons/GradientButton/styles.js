import { StyleSheet } from 'react-native';

import {
  white,
  black,
  heather
} from '../../../resources/colors';

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    borderRadius: 30,
  },
  buttonArea: {
    alignItems: 'flex-end',
    flex: 1,
    marginHorizontal: 20,
  },
  label: {
    fontFamily: 'Product Sans Regular',
    fontSize: 20,
    color: white,
  },
  touchable: {
    width: 150,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',

    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  disable: {
    backgroundColor: heather,
  },
  loading: {
    backgroundColor: heather,
    justifyContent: 'center',
  },
  withIcon: {
    paddingHorizontal: 23,
    justifyContent: 'space-between',
  },
});

export default styles;

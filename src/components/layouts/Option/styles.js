import { StyleSheet } from 'react-native';
import { white, errorColor, midGray } from '../../../resources/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  circle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  internal: {
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  maskedView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  error: {
    borderWidth: 2,
    borderColor: errorColor,
  },

  neutral: {
    borderWidth: 2,
    borderColor: midGray,
  },
});

export default styles;

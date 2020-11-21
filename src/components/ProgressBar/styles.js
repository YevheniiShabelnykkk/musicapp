import { StyleSheet } from 'react-native';

import { moderateScale } from '../../helpers/moderateScale';

export default StyleSheet.create({
  container: {
    height: moderateScale(1),
    width: '100%',
    flexDirection: 'row'
  },

  redLine: {
    backgroundColor: 'red'
  },

  greyLine: {
    width: '100%',
    backgroundColor: 'grey'
  }
});

import { StyleSheet } from 'react-native';

import { moderateScale } from '../../helpers/moderateScale';

export default StyleSheet.create({
  container: {
    flex: 1
  },

  contentContainerStyle: {
    padding: moderateScale(10)
  },

  separator: {
    height: moderateScale(10)
  }
});

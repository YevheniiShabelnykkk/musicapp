import { StyleSheet } from 'react-native';

import { fontScaleNormalize } from '../../helpers/fontScaleNormalize';
import { moderateScale } from '../../helpers/moderateScale';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  contentContainerStyle: {
    paddingBottom: moderateScale(10)
  },

  title: {
    fontSize: fontScaleNormalize(24),
    fontWeight: 'bold',
    color: '#000',
    margin: moderateScale(10),
    marginLeft: moderateScale(15)
  }
});

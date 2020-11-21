import { StyleSheet } from 'react-native';

import { moderateScale } from '../../helpers/moderateScale';
import { fontScaleNormalize } from '../../helpers/fontScaleNormalize';

export default StyleSheet.create({
  options: {
    height: moderateScale(55),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(10),
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5'
  },

  left: {
    flexDirection: 'row'
  },

  title: {
    fontSize: fontScaleNormalize(20),
    marginLeft: moderateScale(15)
  },

  arrowIcon: {
    marginLeft: moderateScale(20)
  }
});

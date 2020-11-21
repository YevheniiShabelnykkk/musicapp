import { StyleSheet } from 'react-native';

import { moderateScale } from '../../helpers/moderateScale';
import { fontScaleNormalize } from '../../helpers/fontScaleNormalize';

export default StyleSheet.create({
  container: {
    height: moderateScale(50),
    alignItems: 'center',
    padding: moderateScale(10),
    flexDirection: 'row',
    borderBottomWidth: moderateScale(0.5),
    borderBottomColor: '#e5e5e5'
  },

  text: {
    marginLeft: moderateScale(15),
    color: '#000',
    fontSize: fontScaleNormalize(18)
  }
});

import { StyleSheet } from 'react-native';

import { fontScaleNormalize } from '../../helpers/fontScaleNormalize';
import { moderateScale } from '../../helpers/moderateScale';

export default StyleSheet.create({
  button: {
    height: moderateScale(70)
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(10)
  },

  image: {
    height: moderateScale(70),
    width: moderateScale(70),
    borderRadius: moderateScale(750)
  },

  infoContainer: {
    marginLeft: moderateScale(12)
  },

  title: {
    fontSize: fontScaleNormalize(18),
    color: '#000'
  },

  subTitle: {
    fontSize: fontScaleNormalize(16),
    color: 'gray'
  },

  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  iconStyles: {
    marginRight: moderateScale(10)
  }
});

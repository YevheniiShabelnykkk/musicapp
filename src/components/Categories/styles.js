import { StyleSheet } from 'react-native';

import { fontScaleNormalize } from '../../helpers/fontScaleNormalize';
import { moderateScale } from '../../helpers/moderateScale';

export default StyleSheet.create({
  container: {
    height: moderateScale(230),
    marginTop: moderateScale(15)
  },

  title: {
    fontSize: fontScaleNormalize(24),
    fontWeight: 'bold',
    color: '#000',
    margin: moderateScale(10),
    marginLeft: moderateScale(15)
  },

  imageContainer: {
    height: moderateScale(150),
    width: moderateScale(150),
    borderRadius: moderateScale(10),
    marginRight: moderateScale(10),
    marginLeft: moderateScale(15),
    overflow: 'hidden'
  },

  image: {
    height: moderateScale(150),
    width: moderateScale(150),
    borderRadius: moderateScale(10),
    padding: moderateScale(10)
  },

  name: {
    position: 'absolute',
    bottom: moderateScale(10),
    left: moderateScale(15),
    color: '#fff',
    fontWeight: 'bold',
    fontSize: fontScaleNormalize(25)
  }
});

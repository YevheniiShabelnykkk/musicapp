import { StyleSheet } from 'react-native';

import { fontScaleNormalize } from '../../helpers/fontScaleNormalize';
import { moderateScale } from '../../helpers/moderateScale';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  header: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    paddingTop: moderateScale(20)
  },

  image: {
    height: moderateScale(220),
    width: moderateScale(220),
    borderRadius: moderateScale(10),
    overflow: 'hidden'
  },

  title: {
    fontSize: fontScaleNormalize(32),
    color: '#000',
    fontWeight: 'bold',
    marginTop: moderateScale(10)
  },

  text: {
    fontSize: fontScaleNormalize(18),
    color: '#333333',
    margin: moderateScale(10),
    fontWeight: 'bold'
  }
});

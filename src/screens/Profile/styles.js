import { StyleSheet } from 'react-native';

import { moderateScale } from '../../helpers/moderateScale';
import { fontScaleNormalize } from '../../helpers/fontScaleNormalize';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  info: {
    padding: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'center'
  },

  image: {
    height: moderateScale(80),
    width: moderateScale(80),
    borderRadius: moderateScale(40),
    overflow: 'hidden'
  },

  dataContainer: {
    paddingLeft: moderateScale(10),
    justifyContent: 'center'
  },

  name: {
    fontSize: fontScaleNormalize(18),
    color: '#000',
    fontWeight: 'bold'
  },

  role: {
    fontSize: fontScaleNormalize(18),
    color: 'gray'
  },

  divider: {
    height: moderateScale(10),
    backgroundColor: '#e5e5e5'
  }
});

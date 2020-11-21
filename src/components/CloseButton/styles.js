import { StyleSheet } from 'react-native';

import { moderateScale } from '../../helpers/moderateScale';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: moderateScale(10),
    right: moderateScale(20),
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: 'white'
  }
});

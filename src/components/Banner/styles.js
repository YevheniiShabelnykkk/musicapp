import { StyleSheet, Dimensions } from 'react-native';

import { moderateScale } from '../../helpers/moderateScale';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: moderateScale(250),
    backgroundColor: '#fff'
  },

  bannerContainer: {
    height: moderateScale(230),
    width: width
  },

  image: {
    height: moderateScale(250),
    width: '100%'
  },

  button: {
    position: 'absolute',
    bottom: moderateScale(15),
    right: moderateScale(15),
    borderRadius: moderateScale(10),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: moderateScale(100),
    height: moderateScale(24),
    flexDirection: 'row'
  },

  text: {
    marginLeft: moderateScale(5)
  }
});

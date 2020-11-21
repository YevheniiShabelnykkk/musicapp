import { StyleSheet } from 'react-native';

import { moderateScale } from '../../helpers/moderateScale';
import { fontScaleNormalize } from '../../helpers/fontScaleNormalize';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  image: {
    height: moderateScale(200),
    width: moderateScale(200),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: moderateScale(20)
  },

  dataContainer: {
    width: '100%',
    padding: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: fontScaleNormalize(20),
    fontWeight: 'bold'
  },

  subTitle: {
    color: 'gray'
  },

  button: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(25),
    backgroundColor: '#ff5b77',
    marginTop: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center'
  },

  actions: {
    width: '100%',
    height: moderateScale(60),
    padding: moderateScale(10),
    paddingTop: moderateScale(10),
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  main: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff'
  },

  text: {
    fontSize: fontScaleNormalize(18),
    color: '#333333',
    margin: moderateScale(10)
  }
});

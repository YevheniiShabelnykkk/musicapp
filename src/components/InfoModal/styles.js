import { StyleSheet } from 'react-native';

import { fontScaleNormalize } from '../../helpers/fontScaleNormalize';
import { moderateScale } from '../../helpers/moderateScale';

import { ifIphoneX } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },

  mainContainer: {
    flex: 1
  },

  container: {
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    ...ifIphoneX(
      {
        paddingBottom: moderateScale(30)
      },
      {
        paddingBottom: moderateScale(10)
      }
    )
  },

  imageContainer: {
    height: moderateScale(180),
    width: moderateScale(180),
    alignSelf: 'center',
    position: 'absolute',
    overflow: 'hidden',
    top: moderateScale(-90),
    borderRadius: moderateScale(20)
  },

  image: {
    height: '100%',
    width: '100%'
  },

  dataContainer: {
    marginTop: moderateScale(100)
  },

  playerContainer: {
    width: '100%',
    padding: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center'
  },

  subTitle: {
    fontSize: fontScaleNormalize(16),
    color: 'gray'
  },

  btn: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(25),
    backgroundColor: '#ff5b77',
    marginTop: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center'
  },

  option: {
    height: moderateScale(50),
    alignItems: 'center',
    padding: moderateScale(10),
    flexDirection: 'row',
    borderBottomWidth: moderateScale(0.5),
    borderBottomColor: '#e5e5e5'
  },

  noBorder: {
    borderBottomWidth: 0
  },

  text: {
    marginLeft: moderateScale(15),
    color: '#000',
    fontSize: fontScaleNormalize(18)
  }
});

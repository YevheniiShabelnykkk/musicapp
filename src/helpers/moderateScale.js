import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const guidelineBaseWidth = 375;

const defaultScaleFactor = width < guidelineBaseWidth ? 1 : 0.5;

const scale = size => (width / guidelineBaseWidth) * size;

export const moderateScale = (size, factor = defaultScaleFactor) =>
  size + (scale(size) - size) * factor;

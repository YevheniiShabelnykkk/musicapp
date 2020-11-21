import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { fontScale } = Dimensions.get('window');

const guidelineBaseWidth = 375;

const defaultScaleFactor = width < guidelineBaseWidth ? 1 : 0.5;

const scale = size => (width / guidelineBaseWidth) * size;

export const fontScaleNormalize = (size, factor = defaultScaleFactor) =>
  fontScale > 1.4
    ? ((size + (scale(size) - size) * factor) / fontScale) * 1.353
    : size + (scale(size) - size) * factor;

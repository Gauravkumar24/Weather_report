import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../Constants';

const {width, height} = Dimensions.get('window');

const getStyles = () =>
  StyleSheet.create({
    main: {
      width: width,
      flex: 1,
      backgroundColor: COLORS.white,
    },
    secMain: {
      width: width,
      height: height * 0.3,
      justifyContent: 'center',
      backgroundColor: COLORS.mainBg,
      paddingTop: height * 0.16,
    },
    currentWeather: {
      fontSize: 25,
      lineHeight: 34,
      fontWeight: '800',
      color: COLORS.white,
      paddingLeft: 20,
      paddingVertical: 10,
    },
    thirdMain: {
      flexDirection: 'row',
      width: width,
      justifyContent: 'space-evenly',
    },
  });
export default getStyles;

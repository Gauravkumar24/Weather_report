import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../Constants';

const {width, height} = Dimensions.get('window');

const getStyles = () =>
  StyleSheet.create({
    main: {
      width: width * 0.25,
      height: height * 0.12,
      backgroundColor: 'white',
      alignItems: 'center',
      borderRadius: 20,
    },
    secMain: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingVertical: 10,
      borderRadius: 20,
    },
    date: {
      fontSize: 30,
      color: COLORS.light_sky_blue,
    },
    calanderView: {
      backgroundColor: COLORS.light_sky_blue,
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
    },
    day: {
      color: COLORS.black,
      fontSize: 16,
      lineHeight: 18,
      fontWeight: '700',
    },
  });
export default getStyles;

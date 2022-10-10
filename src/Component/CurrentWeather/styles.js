import {StyleSheet} from 'react-native';
import {COLORS} from '../../Constants';

const getStyles = () =>
  StyleSheet.create({
    main: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    secMain: {
      paddingLeft: 10,
    },
    weather: {
      fontSize: 30,
      lineHeight: 35,
      color: COLORS.white,
      fontWeight: '700',
    },
    icon: {
      paddingLeft: 10,
    },
    label: {
      color: COLORS.white,
      fontSize: 20,
      fontWeight: '700',
    },
  });
export default getStyles;

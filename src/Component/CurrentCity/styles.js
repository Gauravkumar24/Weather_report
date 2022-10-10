import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../Constants';

const {width, height} = Dimensions.get('window');

const getStyles = () =>
  StyleSheet.create({
    main: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    weather: {
      fontSize: 30,
      lineHeight: 35,
      color: COLORS.white,
      fontWeight: '700',
    },
    city: {
      fontSize: 18,
      color: 'white',
      paddingTop: 5,
      width: 100,
      textAlign: 'center',
    },
  });
export default getStyles;

import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../Constants';

const {width, height} = Dimensions.get('window');

const getStyles = () =>
  StyleSheet.create({
    main: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    mainLabel: {
      fontSize: 25,
      lineHeight: 30,
      paddingTop: 20,
      paddingLeft: 20,
      color: COLORS.black,
      fontWeight: '600',
    },
  });
export default getStyles;

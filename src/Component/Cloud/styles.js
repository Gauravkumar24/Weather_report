import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../Constants';

const {width, height} = Dimensions.get('window');

const getStyles = () =>
  StyleSheet.create({
    main: {
      height: 200,
      width: width,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 10,
    },
  });
export default getStyles;

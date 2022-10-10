import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const getStyles = () => {
  return StyleSheet.create({
    container: {
      minHeight: 60,
      minWidth: width * 0.1,
      maxWidth: width * 0.9,
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      padding: 6,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 20,
      marginTop: 20,
      borderRadius: 10,
    },
    style: {
      height: 55,
      backgroundColor: 'wjite',
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 5,
    },
    dropdownStyle: {
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 4,
      marginTop: 5,
    },
    labelStyle: {
      fontSize: 16,
      lineHeight: 24,
      marginHorizontal: 5,
      color: 'gray',
    },
    placeholderStyle: {
      fontSize: 16,
      lineHeight: 24,
      color: 'gray',
      marginHorizontal: 0,
      paddingHorizontal: 5,
    },
    activeItemStyle: {
      backgroundColor: 'white',
    },
    activeLabelStyle: {
      color: 'white',
    },
    itemStyle: {
      justifyContent: 'flex-start',
    },
  });
};

export default getStyles;

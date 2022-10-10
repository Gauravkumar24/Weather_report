import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CustomDropDown from '../CustomDropDown';
import getStyles from './styles';

const ChangeCity = ({setCurrentCity, currentCity}) => {
  const styles = getStyles();

  return (
    <View>
      <Text style={styles.mainLabel}>{'City Selection Screen'}</Text>
      <CustomDropDown
        value={currentCity}
        onChangeValue={item => setCurrentCity(item)}
      />
    </View>
  );
};

export default ChangeCity;

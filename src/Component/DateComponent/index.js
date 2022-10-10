import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {getDay, padNumber} from '../../Utils';
import IonIcon from 'react-native-vector-icons/Ionicons';
import getStyles from './styles';

const DateComponent = ({selectedDate = new Date()}) => {
  const styles = getStyles();
  return (
    <View style={styles.main}>
      <View style={styles.secMain}>
        <Text style={styles.date}>{padNumber(selectedDate.getDate())}</Text>
        <TouchableOpacity style={styles.calanderView}>
          <IonIcon name="calendar-outline" size={20} />
        </TouchableOpacity>
      </View>
      <Text style={styles.day}>{`${
        getDay[`${selectedDate.getDay()}`]
      },${selectedDate.getFullYear()}`}</Text>
    </View>
  );
};
export default memo(DateComponent);

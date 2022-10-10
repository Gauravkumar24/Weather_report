import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../../Constants';
import getStyles from './styles';
import IonIcon from 'react-native-vector-icons/Ionicons';

const CurrentWeather = ({weatherReport}) => {
  const styles = getStyles();
  return (
    <View style={styles.main}>
      <Text style={styles.weather}>
        {Boolean(weatherReport) ? `${weatherReport}°` : ''}
      </Text>
      <View style={styles.secMain}>
        <IonIcon
          name={'sunny'}
          size={30}
          color={COLORS.white}
          style={styles.icon}
        />
        <Text style={styles.label}>{'Sunny'}</Text>
      </View>
    </View>
  );
};
export default memo(CurrentWeather);

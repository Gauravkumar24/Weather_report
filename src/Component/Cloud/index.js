import React from 'react';
import {View, Text} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../Constants';
import getStyles from './styles';

const Cloud = () => {
  const styles = getStyles();
  return (
    <View style={styles.main}>
      {[1, 2, 3, 4, 5]?.map((item, index) => {
        return (
          <View>
            <IonIcon
              name={Boolean(index) ? 'sunny' : 'partly-sunny-outline'}
              size={30}
              color={COLORS.white}
            />
            <Text
              style={{
                color: COLORS.white,
                fontSize: 20,
                fontWeight: '700',
              }}>
              {Boolean(index) ? 'Sunny' : 'Cloudy'}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
export default Cloud;

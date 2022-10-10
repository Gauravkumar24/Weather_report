import React, {useState, memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../Constants';
import getStyles from './styles';

const CurrentCity = ({currentCity = ''}) => {
  const [showDownArrow, setShowDownArrow] = useState(true);
  const styles = getStyles();
  return (
    <View style={styles.main}>
      <Text style={styles.city} numberOfLines={3} adjustsFontSizeToFit={true}>
        {Boolean(currentCity) ? currentCity : 'Select City'}
      </Text>
      <TouchableOpacity
        style={{
          alignItems: 'center',
        }}>
        <MaterialIcons
          name={
            Boolean(showDownArrow) ? 'keyboard-arrow-down' : 'keyboard-arrow-up'
          }
          color={COLORS.white}
          size={30}
          style={{
            paddingTop: 5,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default memo(CurrentCity);

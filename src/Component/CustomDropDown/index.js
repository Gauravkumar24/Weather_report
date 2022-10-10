import React, {useRef, useState, useCallback} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {api, instance} from '../../Axios';
import {API_URLS} from '../../Axios/ApiUrls';
import {COLORS} from '../../Constants';
import getStyles from './styles';

const CustomDropDown = ({
  value,
  onChangeValue,
  placeholder = 'Search City',
  containerStyle = {},
  dropDownStyle = {},
  error,
}) => {
  const window = useWindowDimensions();
  const styles = getStyles();
  const [topLeft, setTopLeft] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const [showPopUp, setShowPopUp] = useState(false);
  const dropDownRef = useRef(null);

  const [searchCity, setSearchCity] = useState('');
  const [items, setItems] = useState([]);

  const onLayout = () => {
    dropDownRef?.current?.measure((fx, fy, width, height, px, py) => {
      setTopLeft({
        top: py + height - 20,
        left: px - 20,
        width: dropDownStyle?.width || width,
        height: dropDownStyle?.height || 100,
      });
      getCityLocations();
      setShowPopUp(true);
    });
  };

  const getCityLocations = useCallback(async () => {
    const url = API_URLS.getCities(searchCity?.toLocaleLowerCase());
    try {
      const results = await api.get(url);
      if (results?.status === 200) {
        setItems(results?.data?.Record);
      }
    } catch (err) {
      console.log('---Error while calling get cities api--', err);
    }
  }, [searchCity]);

  return (
    <>
      <TextInput
        ref={dropDownRef}
        placeholder={'Serach City'}
        value={Boolean(value) ? value?.name : searchCity}
        style={{
          ...styles.container,
          ...containerStyle,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          borderColor: Boolean(searchCity?.length) ? COLORS.cyan : 'black',
          ...(error
            ? {
                borderColor: 'red',
                borderWidth: 1,
              }
            : {}),
        }}
        onChangeText={text => {
          setSearchCity(text);
          onChangeValue('');
        }}
        onSubmitEditing={e => onLayout()}
        onBlur={e => onLayout()}
      />
      <ReactNativeModal
        isVisible={showPopUp}
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInTiming={1}
        animationOutTiming={1}
        backdropOpacity={0}
        onBackdropPress={() => {
          setShowPopUp(false);
        }}>
        <View
          style={[
            {
              position: 'absolute',
              left: topLeft.left,
              width: topLeft.width,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              shadowColor: '',
              shadowOffset: {height: 4, width: 0},
              shadowRadius: 10,
              shadowOpacity: 0.1,
              borderRadius: 4,
              elevation: 10,
              padding: 5,
              maxHeight:
                window.height - topLeft.top - 140 <= topLeft.height
                  ? 200
                  : window.height - topLeft.top - 120,
              ...(window.height - topLeft.top - 120 <= topLeft.height
                ? {bottom: window.height - topLeft.top}
                : {top: topLeft.top}),
            },
            {},
          ]}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{
              width: topLeft.width,
            }}
            nestedScrollEnabled={true}>
            {Boolean(items?.length) &&
              items.map((item, index) => {
                console.log('---item---', item);
                const active = item.value === value;

                return (
                  <View>
                    <TouchableOpacity
                      key={item._id}
                      style={{
                        width: topLeft.width,
                        paddingHorizontal: topLeft.width * 0.07,
                        backgroundColor: active ? 'white' : 'white',
                        paddingVertical: 10,
                        borderBottomWidth: Boolean(index !== items.length - 1)
                          ? 1
                          : 0,
                      }}
                      onPress={() => {
                        if (onChangeValue) {
                          onChangeValue(item);
                        }
                        setShowPopUp(false);
                      }}>
                      <Text>{item?.name}</Text>
                      <Text>{item?.country}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            {Boolean(!items?.length) && (
              <View
                style={{
                  width: topLeft.width,
                  paddingHorizontal: topLeft.width * 0.07,
                  backgroundColor: 'white',
                  paddingVertical: 5,
                }}>
                <Text>{'No Date Found'}</Text>
              </View>
            )}
          </ScrollView>
        </View>
      </ReactNativeModal>
    </>
  );
};

export default CustomDropDown;

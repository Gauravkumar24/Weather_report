import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Cloud from '../Component/Cloud';
import CurrentCity from '../Component/CurrentCity';
import CurrentWeather from '../Component/CurrentWeather';
import DateComponent from '../Component/DateComponent';
import getStyles from './styles';
import ChangeCity from '../Component/ChangeCity';
import {API_URLS} from '../Axios/ApiUrls';
import {api2} from '../Axios';

const WeatherReport = () => {
  const styles = getStyles();

  const [currentCity, setCurrentCity] = useState('');
  const [weatherReport, setWeatherReport] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getWeatherData = async () => {
    const {lon, lat} = currentCity?.coord;
    const url = API_URLS.getWeatherReport(lon, lat);
    try {
      const results = await api2.get(url);

      console.log('----resultsss-----', results);
      const weather = `${results?.daily[0]?.weather[0]?.icon}`?.split('d');
      setWeatherReport(weather[0]);
    } catch (err) {
      console.log('-----error-- while calling weather report api---', err);
    }
  };

  useEffect(() => {
    if (currentCity?.coord) getWeatherData();
  }, [currentCity]);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.secMain}>
        <Text style={styles.currentWeather}>{'Current Weather'}</Text>
        <View style={styles.thirdMain}>
          <CurrentCity currentCity={currentCity?.name} />
          <CurrentWeather weatherReport={weatherReport} />
          <DateComponent selectedDate={selectedDate} />
        </View>
        <Cloud />
      </View>
      <ChangeCity setCurrentCity={setCurrentCity} currentCity={currentCity} />
    </SafeAreaView>
  );
};

export default WeatherReport;

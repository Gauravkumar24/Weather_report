/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import WeatherReport from './src/Router';

AppRegistry.registerComponent(appName, () => WeatherReport);

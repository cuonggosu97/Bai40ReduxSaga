/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import CounterComponent from "./src/components/CounterComponent";
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => CounterComponent);

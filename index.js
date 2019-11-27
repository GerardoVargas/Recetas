/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

/* EXTERNAL CODE */
import GenericScreen from './src/components/GenericScreen';


AppRegistry.registerComponent(appName, () => GenericScreen);

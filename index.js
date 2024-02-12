/*eslint-disable*/
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {store} from './src/redux/Store/ReduxStore';
import {Provider} from 'react-redux';

const RMPApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RMPApp);
/*eslint-disable*/
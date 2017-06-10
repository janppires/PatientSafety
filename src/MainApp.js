import React from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import AppNavigator from './screens/AppNavigator';

const MainApp = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
)

export default MainApp;
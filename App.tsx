import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
}

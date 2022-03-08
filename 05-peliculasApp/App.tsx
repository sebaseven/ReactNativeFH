import 'react-native-gesture-handler';
import React from 'react'
import { Navigation } from './src/navigator/Navigation';
import { NavigationContainer } from '@react-navigation/native';
export const App = () => {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  )
}

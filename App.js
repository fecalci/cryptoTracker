import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoinsStack from './Components/CoinsStack'

const App =() =>{
  return(
    <NavigationContainer>
      <CoinsStack />
    </NavigationContainer>
  )
}

export default App;
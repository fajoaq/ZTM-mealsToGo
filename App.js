import React, { useState} from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { 
  StyleSheet, 
  Text,
  TouchableOpacity
} from 'react-native';

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';

const App = () => {
  return (
    <React.Fragment>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
});

export default App;
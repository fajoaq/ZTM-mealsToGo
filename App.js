import React, { useState} from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text,
  TouchableOpacity
} from 'react-native';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components';

import { theme } from './src/infrastructure/theme';

const App = () => {
  return (
    <React.Fragment>
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
import React, { useState} from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  useFonts as useOswald,
  Oswald_400Regular
} from '@expo-google-fonts/oswald'
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato'
import { 
  StyleSheet
} from 'react-native';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components';

import { theme } from './src/infrastructure/theme';

const App = () => {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if(!oswaldLoaded || !latoLoaded) return null; // keep loading until fonts are ready 

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
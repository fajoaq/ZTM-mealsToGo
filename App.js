import React, { useState} from 'react';
import { View, Text } from 'react-native'; //remove
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import {
  useFonts as useOswald,
  Oswald_400Regular
} from '@expo-google-fonts/oswald'
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato'

import { SafeArea } from './src/components/utility/safe-area.component';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';

const MapScreen = () => (
  <SafeArea>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Map Screen</Text>
    </View>
  </SafeArea>
);

const SettingsScreen = () => (
  <SafeArea>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  </SafeArea>
  
);

const Tab = createBottomTabNavigator();

const generateTabBarIcon = (route, { focused, color, size}) => {
  let iconName;

  if(route.name === 'Restaurants') iconName = focused ? 'restaurant-outline' : 'restaurant';
  else if(route.name === 'Map') iconName = focused ? 'map-outline' : 'map';
  else if(route.name === 'Settings') iconName = focused ? 'settings-outline' : 'settings';

  return <Ionicons name={ iconName } size={ size } color={ color } />;
}

const App = () => {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if(!oswaldLoaded || !latoLoaded) return null; // keep loading until fonts are ready 

  return (
    <React.Fragment>
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={ ({ route }) => ({
                tabBarIcon: ({ focused, color, size}) => generateTabBarIcon(route, { focused, color, size})
              }) }
              tabBarOptions={ {
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              } }
            >
              <Tab.Screen name="Restaurants" component={ RestaurantsScreen } />
              <Tab.Screen name="Map" component={ MapScreen } />
              <Tab.Screen name="Settings" component={ SettingsScreen } />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </LocationContextProvider>
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
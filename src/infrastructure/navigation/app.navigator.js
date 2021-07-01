import React from 'react';
import { View, Text } from 'react-native'; //remove
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { SafeArea } from '../../components/utility/safe-area.component';
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';

const Tab = createBottomTabNavigator();

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

const generateTabBarIcon = (route, { focused, color, size}) => {
    let iconName;

    if(route.name === 'Restaurants') iconName = focused ? 'restaurant-outline' : 'restaurant';
    else if(route.name === 'Map') iconName = focused ? 'map-outline' : 'map';
    else if(route.name === 'Settings') iconName = focused ? 'settings-outline' : 'settings';

    return <Ionicons name={ iconName } size={ size } color={ color } />;
}

export const AppNavigator = () => {
    return (
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
    );
};
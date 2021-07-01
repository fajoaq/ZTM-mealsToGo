import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';

const restaurantStack = createStackNavigator();

const screenConfig = {
    headerMode: "none"
}

export const RestaurantsNavigator = () => {
    return (
        <restaurantStack.Navigator {...screenConfig}>
            <restaurantStack.Screen name="Restaurants" component={ RestaurantsScreen } />
        </restaurantStack.Navigator>
    );
};
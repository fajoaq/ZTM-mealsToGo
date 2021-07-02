import React from 'react';
import { 
    createStackNavigator,
    TransitionPresets
} from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurant-detail.screen';

const RestauranStack = createStackNavigator();

const navigatorConfig = {
    screenOptions: {
        ...TransitionPresets.ModalPresentationIOS
    },
    headerMode: 'none'
}

const screenConfig = {
    options: {
        gestureEnabled: true
    }
}

export const RestaurantsNavigator = () => {
    return (
        <RestauranStack.Navigator {...navigatorConfig}>
            <RestauranStack.Screen 
                name="Restaurants" 
                component={ RestaurantsScreen }
                {...screenConfig}
            />
            <RestauranStack.Screen 
                name="RestaurantDetail" 
                component={ RestaurantDetailScreen } 
                {...screenConfig}
            />
        </RestauranStack.Navigator>
    );
};
import React from 'react';
import { Text } from 'react-native'
import { 
    createStackNavigator,
    TransitionPresets
} from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';

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

const RestaurantDetail = () => (
    <Text>Restaurant Detail</Text>
)

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
                component={ RestaurantDetail } 
                {...screenConfig}
            />
        </RestauranStack.Navigator>
    );
};
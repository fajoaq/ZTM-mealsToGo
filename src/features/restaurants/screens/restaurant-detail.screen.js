import React from 'react';
import { View, Text } from 'react-native';

export const RestaurantDetailScreen = ({ route }) => {
    const { restaurant } = route.params;

    return (
        <View>
            <Text>{ restaurant.name }</Text>
            <Text>{ restaurant.address }</Text>
        </View>
    );
};
import React from 'react';
import { Platform, View } from 'react-native'

import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const IS_IOS = Platform.OS === 'ios';

export const RestaurantDetailScreen = ({ route }) => {
    const { restaurant } = route.params;

    if(IS_IOS) return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant} />
        </SafeArea>
    );
    // Else, render for android
    return (
        <View>
            <RestaurantInfoCard restaurant={restaurant} />
        </View>
    );
};
import React, { useContext, useState } from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { FavouritesContext } from '../../services/favourites/favourites.context';

const FavouriteToggle = styled(TouchableOpacity)`
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
    const { 
        favourites, 
        addFavourite, 
        removeFavourite 
    } = useContext(FavouritesContext);
    const isFavourited = favourites.find((f) => f.placeId === restaurant.placeId);

    return (
        <FavouriteToggle
            onPress={ () => !isFavourited 
                ? addFavourite(restaurant)
                : removeFavourite(restaurant)
            }
        >
            <AntDesign 
                name={ isFavourited ? "heart" : "hearto" }
                size={24}
                color={ isFavourited ? "red" : "white" }
            />
        </FavouriteToggle>
    );
};
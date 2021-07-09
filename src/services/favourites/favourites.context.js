import React, { createContext, useState} from 'react';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const addFavourite = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    };

    const removeFavourite = (restaurant) => {
        const newfavourites = favourites.filter((x) => x.placeId !== restaurant.placeId);

        setFavourites(newfavourites);
    };

    return (
        <FavouritesContext.Provider value={{
            favourites,
            addFavourite,
            removeFavourite
        }}>
            { children }
        </FavouritesContext.Provider>
    );
};


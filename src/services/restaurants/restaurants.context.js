import React, { useState, useEffect ,createContext, useContext } from 'react';

import { restaurantsRequest, restaurantsTransform } from './restaurants.service';
import { LocationContext } from '../location/location.context';
export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const { location } = useContext(LocationContext)
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = (loc) => {
        setIsLoading(true);
        setRestaurants([]); //reset resturants to empty array
        
        setTimeout( async () => {
            try {
                const data = await restaurantsRequest(loc);
                const results = restaurantsTransform(data);

                setRestaurants(results);
                setIsLoading(false);
            } catch (error) {

                setError(error);
                setIsLoading(false)
            }
        }, 1000)
    }

    useEffect(() => {
        if(location) {
            const locationString = `${location.lat},${location.lng}`

            retrieveRestaurants(locationString);
        }
    }, [location]);

    return (
        <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
            { children }
        </RestaurantsContext.Provider>
    )
};
import React, { createContext, useState, useEffect} from 'react';

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("San Francisco");
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const onSearch = async (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword)
        const res = await locationRequest(keyword.toLowerCase());

        if(!searchKeyword.length) return; //no search term, return early

        if(res.error) setError(res.error);
        else if(res.results) {
            const formattedResults = locationTransform(res);

            setLocation(formattedResults);
        }

        setIsLoading(false);
    };

    return (
        <LocationContext.Provider value={{
            isLoading,
            error,
            location,
            search: onSearch,
            keyword
        }}>
            { children }
        </LocationContext.Provider>
    )
}
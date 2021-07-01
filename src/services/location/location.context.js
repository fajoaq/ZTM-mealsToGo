import React, { createContext, useState, useEffect} from 'react';

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("San Francisco");
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword)
    };

    useEffect(() => {
        (async () => {
            if(!keyword.length) return; //no search term, return early
        
            const res = await locationRequest(keyword.toLowerCase());
    
            if(res.error) setError(res.error);
            else if(res.results) {
                const formattedResults = locationTransform(res);
    
                setLocation(formattedResults);
            }
    
            setIsLoading(false);
        })();

        return () => setIsLoading(false);
    }, [keyword]);

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
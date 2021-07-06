import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components/native'
import { Searchbar } from 'react-native-paper';

import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
    padding: ${props => props.theme.space[3]};
    width: 100%;
    position: absolute;
    z-index: 999;
    top: 20px;
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchQuery, setSearchQuery] = useState(keyword);

    useEffect(() => {
        setSearchQuery(keyword);
    }, [keyword])

    return (
        <SearchContainer>
            <Searchbar 
                placeholder="search"
                value={searchQuery}
                icon="map"
                onSubmitEditing={ () => search(searchQuery) }
                onChangeText={ (text) => setSearchQuery(text) }
            />
        </SearchContainer>
    )
};
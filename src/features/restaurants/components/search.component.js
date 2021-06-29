import React, { useContext, useState } from 'react';
import styled from 'styled-components/native'
import { Searchbar } from 'react-native-paper';

import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
    padding: ${props => props.theme.space[3]}
    paddingVertical: ${props => props.theme.space[2]}
    backgroundColor: ${props => props.theme.colors.bg.primary};
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchQuery, setSearchQuery] = useState(keyword);

    return (
        <SearchContainer>
            <Searchbar 
                placeholder="search"
                value={searchQuery}
                onSubmitEditing={ () => search(searchQuery) }
                onChangeText={ (text) => setSearchQuery(text) }
            />
        </SearchContainer>
    )
};
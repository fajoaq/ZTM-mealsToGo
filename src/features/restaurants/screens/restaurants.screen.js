import React, { useState} from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import {
    FlatList,
    TouchableOpacity
} from 'react-native';

import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]}
  paddingVertical: ${props => props.theme.space[2]}
  backgroundColor: ${props => props.theme.colors.bg.primary};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { paddingBottom: 16 }
})`
  flex: 1;
  padding: ${props => props.theme.space[3]};

  background-color: ${props => props.theme.colors.bg.secondary};
`;

const DATA = [
{
    id: 1,
    title: "Some data"
},
{
  id: 2,
  title: "Some data"
}
];

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const onQueryChange = (query) => {
    setSearchQuery(query);
  }

  const renderItem = ({ item }) => {
      return (
        <TouchableOpacity>
          <RestaurantInfoCard />
        </TouchableOpacity>
      );
  };

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar 
          placeholder="search"
          onChangeText={ onQueryChange }
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList 
        data={ DATA }
        renderItem={ renderItem }
        keyExtractor={ item => item.id.toString() }
      />
    </SafeArea>
  );
};
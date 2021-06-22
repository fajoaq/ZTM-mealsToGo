import React, { useState, useContext} from 'react';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';
import styled from 'styled-components/native';
import {
    FlatList,
    TouchableOpacity
} from 'react-native';

import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

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

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  z-index: 99; 
  position: absolute; 
  top: 50%; 
  left: 50%;
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
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  const [searchQuery, setSearchQuery] = useState('')

  const onQueryChange = (query) => {
    setSearchQuery(query);
  }

  const renderItem = ({ item }) => {
      return (
        <TouchableOpacity>
          <RestaurantInfoCard restaurant={ item } />
        </TouchableOpacity>
      );
  };

  return (
    <SafeArea>
      { isLoading && 
        <LoadingContainer>
          <Loading 
            animating={ true } 
            color={ Colors.blue300 }
            size={50}
          /> 
        </LoadingContainer>
      }
      <SearchContainer>
        <Searchbar 
          placeholder="search"
          onChangeText={ onQueryChange }
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList 
        data={ restaurants }
        renderItem={ renderItem }
        keyExtractor={ item => item.name.toString() }
      />
    </SafeArea>
  );
};
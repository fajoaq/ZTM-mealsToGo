import React, { useState} from 'react';
import { Searchbar } from 'react-native-paper';
import {
    FlatList,
    Platform, 
    TouchableOpacity, 
    StatusBar 
} from 'react-native';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';

const IS_IOS = Platform.OS === 'ios';

const RestaurantScreenContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: ${IS_IOS ? 0 : StatusBar.currentHeight}px;
`;

const Search = styled.View`
  padding: 16px
  paddingVertical: 10px
  backgroundColor: green;
`;

const RestaurantList = styled(FlatList)`
  flex: 1;
  padding: 16px;
  backgroundColor: blue;
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
    <RestaurantScreenContainer>
      <Search>
        <Searchbar 
          placeholder="search"
          onChangeText={ onQueryChange }
          value={searchQuery}
        />
      </Search>
      <RestaurantList 
        data={ DATA }
        renderItem={ renderItem }
        keyExtractor={ item => item.id.toString() }
      />
    </RestaurantScreenContainer>
  );
};
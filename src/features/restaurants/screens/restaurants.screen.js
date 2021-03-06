import React, { useContext, useState} from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import styled from 'styled-components/native';
import {
    FlatList,
    TouchableOpacity
} from 'react-native';

import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { FavouritesBar } from '../../../components/Favourites/favourites-bar.component'
import { Search } from '../components/search.component';

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

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const [isFavouritesToggled, setFavouritesToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);

  const onPressCard = (screen, params) => {
    navigation.navigate(screen, params)
  };

  const renderItem = ({ item }) => {
      return (
        <TouchableOpacity 
          onPress={ () => onPressCard('RestaurantDetail', { restaurant: item }) }
        >
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
      <Search 
        isFavouritesToggled={ isFavouritesToggled } 
        onFavouritesToggle={ () => setFavouritesToggled(!isFavouritesToggled) }
      />
      { isFavouritesToggled &&
        <FavouritesBar />
      }
      <RestaurantList 
        data={ restaurants }
        renderItem={ renderItem }
        keyExtractor={ item => item.name.toString() }
      />
    </SafeArea>
  );
};
/* 
<SearchContainer>
<Searchbar 
  placeholder="search"
  onChangeText={ onQueryChange }
  value={searchQuery}
/>
</SearchContainer> */
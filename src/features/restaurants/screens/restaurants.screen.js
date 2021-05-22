import React, { useState} from 'react';
import { Searchbar } from 'react-native-paper';
import { 
    StyleSheet, 
    Text, 
    View, 
    FlatList, 
    SafeAreaView, 
    Platform, 
    TouchableOpacity, 
    StatusBar 
} from 'react-native';

import { RestaurantInfo } from '../components/restaurant-info';

const IS_IOS = Platform.OS === 'ios';
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
            <RestaurantInfo />
          </TouchableOpacity>
        );
    };

    return (
        <React.Fragment>
        <SafeAreaView style={styles.container}>
          <View style={ styles.search }>
            <Searchbar 
              placeholder="search"
              onChangeText={ onQueryChange }
              value={searchQuery}
            />
          </View>
          <FlatList 
            data={ DATA }
            renderItem={ renderItem }
            keyExtractor={ item => item.id.toString() }
            style={ styles.list}
          />
        </SafeAreaView>
      </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: IS_IOS ? 0 : StatusBar.currentHeight,
    },
    search: {
      padding: 16,
      paddingVertical: 10,
      backgroundColor: 'green'
    },
    list: {
      flex: 1,
      padding: 16,
      backgroundColor: 'blue'
    }
  });
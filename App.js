import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
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

const App = () => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <Text>{ item.title }</Text>
      </TouchableOpacity>
    );
  };

  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <Text style={ styles.search }>Page content</Text>
        <FlatList 
          data={ DATA }
          renderItem={ renderItem }
          keyExtractor={ item => item.id.toString() }
          style={ styles.list}
        />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: IS_IOS ? 0 : StatusBar.currentHeight,
  },
  search: {
    paddingVertical: 10,
    padding: 16,
    backgroundColor: 'green'
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue'
  }
});

export default App;
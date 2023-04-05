import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

function App() {
  // TODO Swap out dummy data with proper back-end
  // TODO Android dark theme doesn't work correctly
  const [items, setItems] = useState([
    {id: 0, name: 'Milk'},
    {id: 1, name: 'Eggs'},
    {id: 2, name: 'Cheese'},
    {id: 3, name: 'Prosciutto'},
  ]);

  let highestId = [...items].sort((a, b) => b.id - a.id)[0].id;

  function handleDeleteItem(itemId) {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  }

  function handleAddItem(item) {
    if (!item) {
      Alert.alert('Error', 'Please enter an item', {text: 'OK'});
    } else {
      setItems(prevItems => [...prevItems, {id: (highestId += 1), name: item}]);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
      <AddItem handleAddItem={handleAddItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
  },
});
export default App;

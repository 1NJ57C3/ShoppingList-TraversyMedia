import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Goodbye World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
});
export default App;

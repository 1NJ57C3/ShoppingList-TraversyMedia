import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.f}>Goodbye World</Text>
    </View>
  );
}

Header.defaultProps = {
  title: 'Shopping List',
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: 'whitesmoke',
    fontSize: 23,
    textAlign: 'center',
  },
  f: {
    color: '#34273a',
    textAlign: 'center',
    textDecorationLine: 'line-through',
  },
});
export default Header;

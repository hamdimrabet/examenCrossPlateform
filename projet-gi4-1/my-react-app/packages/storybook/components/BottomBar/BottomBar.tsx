import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bottom Bar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BottomBar;

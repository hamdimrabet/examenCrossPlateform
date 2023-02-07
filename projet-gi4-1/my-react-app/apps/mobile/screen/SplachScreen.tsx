import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash2.jpg')}
        style={styles.splashImage}
      />
      
      <Text style={styles.splashText}>MY Music Player </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  splashText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default SplashScreen;

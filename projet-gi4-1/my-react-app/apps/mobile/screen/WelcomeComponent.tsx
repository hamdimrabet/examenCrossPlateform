import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View ,Text  } from 'react-native';

const WelcomeComponent = ({navigation}) => {
    const animation = useRef(null);
    useEffect(() => {
      // You can control the ref programmatically, rather than using autoPlay
      // animation.current?.play();
    }, []);   
  
    return (
      <View style={styles.animationContainer}>
        <Text style={styles.welcomeText}>Bienvenue sur web!</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Voir les playlists"
            onPress={()=> navigation.navigate("Playlist")}
          />
        </View>
      </View>
    );
}

export default WelcomeComponent


const styles = StyleSheet.create({
    animationContainer: {
      backgroundColor: '#1E90FF',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 100,
    },
      buttonContainer: {
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#FFD700',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 5 },
      },
      welcomeText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
      },
    });
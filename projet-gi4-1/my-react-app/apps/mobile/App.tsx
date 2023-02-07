import React, { useEffect, useState } from "react";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeComponent from "./screen/WelcomeComponent";
import HomeScreen from "./screen/HomeScreen";
import HomeScreenTrending from "./screen/HomeScreentrending";
import PlaylistScreen from "./screen/PlaylistScreen";
import ArtisteScreen from "./screen/ArtisteScreen";
import SplashScreen from './screen/SplachScreen';
import ProfilePage from './screen/Profile';

const Stack = createStackNavigator();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
        
          <Stack.Screen name="Welcome" component={WelcomeComponent}></Stack.Screen>
          <Stack.Screen name="Profile" component={ProfilePage}></Stack.Screen>
          <Stack.Screen name="Home" component={HomeScreenTrending}></Stack.Screen>
          <Stack.Screen name="Playlist" component={PlaylistScreen}></Stack.Screen>
          <Stack.Screen name="Artiste" component={ArtisteScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
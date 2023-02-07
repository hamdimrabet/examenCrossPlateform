import React from 'react';
import { View } from 'react-native';
import NavigationTab from './buttonBar';

export default {
  title: 'NavigationTab',
  component: NavigationTab,
};

const navigation = {
  navigate: (screen) => { console.log(`Navigating to ${screen}`) },
};

export const Default = () => (
  <View style={{ flex: 1, backgroundColor: 'black' }}>
    <NavigationTab navigation={navigation} />
  </View>
);

import React from 'react';
import { View } from 'react-native';
import BottomBar from './BottomBar';

export default {
  title: 'BottomBar',
  component: BottomBar,
};

export const Default = () => (
  <View style={{ flex: 1 }}>
    <BottomBar />
  </View>
);

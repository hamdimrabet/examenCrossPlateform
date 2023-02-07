import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react'

type FavoriteProps = {};

const Favorite: React.FC<FavoriteProps> = (props) => {
  const { } = props;
  const [etat, setEtat] = useState(0)

  const onPress = () => {
    console.log("on press")
    if (etat === 0) {
      setEtat(1)
      console.log('etat non favorite', etat)
    } else {
      setEtat(0)
      console.log('etat favorite', etat)
    }
  }

  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={() => onPress()}>
        <Ionicons
          name={etat ? 'heart-circle' : 'heart-circle-outline'}
          size={35}
          color={etat ? 'white' : 'black'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "black",
  },
  view: {
    flex: 1,
    //backgroundColor: "black",
    borderRadius: 5
  }
});

export default Favorite;
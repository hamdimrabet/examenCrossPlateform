import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import  Favorite  from "../FavoriteComponent/Favorite";

type CoverProp = {
  borderRadius: number;
  imageUrl: string;
  height:number;
  width:number;
};

const Cover: React.FC<CoverProp> = (props) => {
  const { borderRadius, imageUrl, height,width } = props;
  return (
    <View>
    
      <ImageBackground
        source={{ uri: imageUrl }}
        style={{ height, width, borderRadius }}
      ></ImageBackground>
     <view style={styles.favorite}>
        <Favorite   />

        </view>
    </View>
    
  );
  
};

export default Cover;


const styles = StyleSheet.create({

  favorite: {
    position: 'absolute',
    top: 0,
    marginLeft: 167,
  },
    
});

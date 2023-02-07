import { StyleSheet, Text, View, Image,  } from 'react-native';
import React from 'react';
import  Favorite  from "../FavoriteComponent/Favorite";

type CardArticleProps = {
  title: React.ReactNode;
  price: React.ReactNode;
  description?: React.ReactNode;
};

const CardArticle: React.FC<CardArticleProps> = (props) => {
  const { title, price, description } = props;
  return (
    <View style={{ flex: 1 }}>
      <Text>CardArticle</Text>
      <View style={{ position: 'relative' }}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg',
          }}
          style={{ height: 100, width: 100 }}
        />
        <view style={styles.favorite}>
        <Favorite   />

        </view>
      </View>
      <View style={{flex : 1}}>
        {title}
        {description}
        {price}
      </View>
    </View>
  );
};

export default CardArticle;

const styles = StyleSheet.create({

  favorite: {
    position: 'absolute',
    top: 0,
    marginLeft: 70,
  },
  
});

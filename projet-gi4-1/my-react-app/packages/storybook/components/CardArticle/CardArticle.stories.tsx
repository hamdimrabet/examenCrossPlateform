import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import CardArticle from './CardArticle';
import { Button, Text, View } from 'react-native';
const CardArticleMeta: ComponentMeta<typeof CardArticle> = {
  title: 'CardArticle Component',
  component: CardArticle,
  argTypes: {},
  args: {
    title: <Text style={{ color: 'red' }}> test </Text>,
    price: <Text style={{ color: 'gray' }}> test </Text>,
  },
};
export default CardArticleMeta;

type CardArticleStory = ComponentStory<typeof CardArticle>;
export const Basic: CardArticleStory = (args) => <CardArticle {...args} />;
export const CardType2: CardArticleStory = (args) => <CardArticle {...args} />;

CardType2.args = {
  ...Basic.args,
  title: <Text style={{ color: 'black' }}> test </Text>,
  description: <Text style={{ color: 'black' }}> test </Text>,
  price: (
    <View>
      <Text style={{ color: 'black' }}> test </Text>
      <Button title="test" />
    </View>
  ),
};

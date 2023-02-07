import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import  Favorite  from "./Favorite";

const MyFavoriteMeta: ComponentMeta<typeof Favorite> = {
  title: "Favorite component",
  component: Favorite,
  argTypes: {},
  args: {},
};

export default MyFavoriteMeta;

type MyFavoriteStory = ComponentStory<typeof Favorite>;

export const Basic: MyFavoriteStory = (args) => <Favorite {...args} />;

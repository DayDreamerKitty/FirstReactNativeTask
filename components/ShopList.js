import React from "react";
import { StyleSheet, View } from "react-native";
import shopStore from "../stores/shopStore";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react";

const ShopList = () => {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop._id} />
  ));
  return <View>{shopList}</View>;
};

export default observer(ShopList);

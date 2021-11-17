import React from "react";
import { StyleSheet, View } from "react-native";
import shopStore from "../stores/shopStore";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react";
import styles from "../styles";

const ShopList = ({ navigation }) => {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem navigation={navigation} shop={shop} key={shop._id} />
  ));
  return <View style={styles.container}>{shopList}</View>;
};

export default observer(ShopList);

import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, Text, View, Image } from "react-native";
import shopStore from "../stores/shopStore";
import ProductList from "./ProductList";
import { Spinner } from "native-base";
import { baseURL } from "../stores/instance";

const ShopDetail = () => {
  if (shopStore.isLoading) return <Spinner />;
  const shop = shopStore.shops[0];
  return (
    <View>
      <Text>{shop.name}</Text>
      <Image
        source={{ uri: baseURL + shop.image }}
        style={{ width: 50, height: 50 }}
      />
      <ProductList products={shop.products} />
    </View>
  );
};

export default observer(ShopDetail);

const styles = StyleSheet.create({});

import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, Text, View, Image } from "react-native";
import shopStore from "../stores/shopStore";
import ProductList from "./ProductList";
import { Spinner, Button } from "native-base";
import { baseURL } from "../stores/instance";
import styles from "../styles";

const ShopDetail = ({ navigation, route }) => {
  if (shopStore.isLoading) return <Spinner />;
  const shop = route.params.shop;
  return (
    <View style={styles.container}>
      <Text>{shop.name}</Text>
      <Image
        source={{ uri: baseURL + shop.image }}
        style={{ width: 50, height: 50 }}
      />
      <ProductList products={shop.products} />
      <Button onPress={() => navigation.navigate("Home")}> Home </Button>
    </View>
  );
};

export default observer(ShopDetail);

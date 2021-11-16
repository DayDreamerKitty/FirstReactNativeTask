import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "native-base";
import { baseURL } from "../stores/instance";
const ShopItem = ({ shop, navigation }) => {
  return (
    <View>
      <Text>{shop.name}</Text>
      <image
        source={{ uri: baseURL + shop.image }}
        style={{ width: 50, height: 50 }}
      />
      <Button onPress={() => navigation.navigate("ShopDetail", { shop: shop })}>
        Details
      </Button>
    </View>
  );
};

export default ShopItem;

const styles = StyleSheet.create({});

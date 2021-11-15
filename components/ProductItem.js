import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProductItem = ({ product }) => {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  );
};

export default ProductItem;

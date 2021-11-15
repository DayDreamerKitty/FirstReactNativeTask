import React from "react";
import { View, Text } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const proList = products.map((product) => (
    <ProductItem product={product} key={product._id} />
  ));
  return (
    <View>
      <Text>{proList}</Text>
    </View>
  );
};

export default ProductList;

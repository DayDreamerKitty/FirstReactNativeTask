import { Box, HStack, VStack, Avatar } from "native-base";
import React from "react";
import { Text, View } from "react-native";
import { baseURL } from "../stores/instance";

const CartItem = ({ item }) => {
  return (
    <HStack>
      <Avatar size="48px" source={{ uri: baseURL + item.product.image }} />
      <VStack>
        <Text>{item.product.name}</Text>
        <Text>
          {item.quantity} x {item.product.price}
        </Text>
      </VStack>
      <Text> Total Price</Text>
      <Text>{item.quantity * item.product.price} KD </Text>
    </HStack>
  );
};

export default CartItem;

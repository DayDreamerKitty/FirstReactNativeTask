import { Box, HStack, VStack, Avatar } from "native-base";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { baseURL } from "../stores/instance";
import NumericInput from "react-native-numeric-input";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <View>
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
      <NumericInput
        type="up-down"
        value={quantity}
        onChange={(value) => setQuantity(value)}
      />
    </View>
  );
};

export default CartItem;

import { Box, HStack, VStack, Avatar, Button } from "native-base";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { baseURL } from "../stores/instance";
import NumericInput from "react-native-numeric-input";
import { observer } from "mobx-react";
import cartStore from "../stores/cartStore";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const handleAdd = (value) => {
    setQuantity(value);
    cartStore.addItemToCart(item.product, value);
  };

  const handleDelete = () => {
    cartStore.removeItemFromCart(item.product._id);
  };

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
        <NumericInput
          type="up-down"
          value={quantity}
          onChange={(value) => handleAdd(value)}
        />
        <Button onPress={handleDelete}>Remove</Button>
        <Text> Total Price</Text>
        <Text>{item.quantity * item.product.price} KD </Text>
      </HStack>
    </View>
  );
};

export default observer(CartItem);

import React from "react";
import CartItem from "./CartItem";
import { observer } from "mobx-react";
import cartStore from "../stores/cartStore";
import { VStack } from "native-base";
import { baseURL } from "../stores/instance";
import styles from "../styles";
import { View } from "react-native";
import { Button } from "native-base";

const CartList = () => {
  const cartList = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} />
  ));
  const handleCheckout = () => {
    cartStore.checkout();
  };
  return (
    <View style={styles.container}>
      {cartList}
      <Button onPress={handleCheckout}>Checkout</Button>
    </View>
  );
};

export default observer(CartList);

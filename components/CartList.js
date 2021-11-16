import React from "react";
import CartItem from "./CartItem";
import { observer } from "mobx-react";
import cartStore from "../stores/cartStore";
import { VStack } from "native-base";
import { baseURL } from "../stores/instance";

const CartList = () => {
  const cartList = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} />
  ));
  return <VStack>{cartList}</VStack>;
};

export default observer(CartList);

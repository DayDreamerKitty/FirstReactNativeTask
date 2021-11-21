import React from "react";
import CartItem from "./CartItem";
import { observer } from "mobx-react";
import cartStore from "../stores/cartStore";
import styles from "../styles";
import { View, Alert } from "react-native";
import { Button } from "native-base";
import authStore from "../stores/authStore";

const CartList = ({ navigation }) => {
  const cartList = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} />
  ));
  // const handleCheckout = () => {
  //   cartStore.checkout();
  // };
  const handlePress = () => {
    if (authStore.user) {
      cartStore.checkout();
    } else {
      Alert.alert(
        "Signin",
        "You need to sign in before seeing the cart",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <View style={styles.container}>
      {cartList}
      <Button onPress={handlePress}>Checkout</Button>
    </View>
  );
};

export default observer(CartList);

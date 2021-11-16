import React from "react";
import { View, Text } from "react-native";
import { Button } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";

const CartButton = ({ navigation }) => {
  return (
    <View>
      <Icon
        style={{ marginRight: 15, color: "pink" }}
        name="staro"
        size={27}
        onPress={() => navigation.navigate("CartList")}
      />
    </View>
  );
};

export default CartButton;

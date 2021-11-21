import React from "react";
import { View } from "react-native";
import { Badge } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";

const CartButton = ({ navigation }) => {
  return (
    <View>
      <Badge>{cartStore.totalQuantity}</Badge>
      <Icon
        style={{ marginRight: 15, color: "pink" }}
        name="staro"
        size={27}
        onPress={() => navigation.navigate("CartList")}
      />
    </View>
  );
};

export default observer(CartButton);

import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CartButton from "./Buttons/CartButton";
import CartList from "./CartList";
import Home from "./Home";
import ShopDetail from "./ShopDetail";
import ShopList from "./ShopList";

const RootNavigation = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="ShopList"
        component={ShopList}
        options={(props) => ({ headerRight: () => <CartButton {...props} /> })}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
          };
        }}
        options={(props) => ({ headerRight: () => <CartButton {...props} /> })}
      />
      <Screen name="CartList" component={CartList} />
    </Navigator>
  );
};

export default RootNavigation;

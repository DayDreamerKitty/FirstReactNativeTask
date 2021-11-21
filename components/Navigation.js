import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CartButton from "./Buttons/CartButton";
import CartList from "./CartList";
import Home from "./Home";
import ShopDetail from "./ShopDetail";
import ShopList from "./ShopList";
import Signin from "./authentication/Signin";
import Signup from "./authentication/Signup";

const RootNavigation = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Signin">
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
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default RootNavigation;

import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "./components/Home";
import ShopDetail from "./components/ShopDetail";
import ShopList from "./components/ShopList";
import { createStackNavigator } from "@react-navigation/stack";
import RootNavigation from "./components/Navigation";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <RootNavigation />
        {/* <Home /> */}
        {/* <ShopList /> */}
        {/* <ShopDetail /> */}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

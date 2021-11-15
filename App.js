import { NativeBaseProvider } from "native-base";
import React from "react";
import Home from "./components/Home";
import ShopList from "./components/ShopList";

export default function App() {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
}

import React from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";
import { StatusBar } from "expo-status-bar";
import styles from "../styles";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Page!</Text>
      <Button onPress={() => navigation.navigate("ShopList")}>
        Shops List
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

export default Home;

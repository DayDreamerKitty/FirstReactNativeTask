import React from "react";
import { Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "../styles";

function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Page!</Text>
      <Button title="Press me!" onPress={() => alert("Hi!")} />
      <StatusBar style="auto" />
    </View>
  );
}

export default Home;

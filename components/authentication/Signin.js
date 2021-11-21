import { Button } from "native-base";
import React, { useState } from "react";
import { View, Text } from "react-native";
import authStore from "../../stores/authStore";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { Input } from "native-base";
import Signup from "./Signup";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const handleSubmit = async () => {
    await authStore.Signin(user, navigation);
  };
  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Signin</Text>
      <TextInput
        onChangeText={(username) => setUser({ ...user, username })}
        style={styles.authTextInput}
        placeholder="Username"
      />
      <Input
        type="password"
        onChangeText={(password) => setUser({ ...user, password })}
        style={styles.authTextInput}
        placeholder="Password"
      />
      <Button onPress={handleSubmit}>Login</Button>
      <Button
        onPress={() => navigation.navigate("Signup")}
        style={styles.AuthOther}
      >
        Click here to register!
      </Button>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 60,
    paddingLeft: 60,
  },
  authTitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    borderBottomWidth: 1,
  },
  AuthOther: {
    marginTop: 15,
  },
});

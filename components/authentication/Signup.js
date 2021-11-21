import React, { useState } from "react";
import { View, Text } from "react-native";
import authStore from "../../stores/authStore";
import { TextInput } from "react-native";
import { Input } from "native-base";
import { StyleSheet } from "react-native";
import { Button } from "native-base";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const handleSubmit = async () => {
    await authStore.Signup(user, navigation);
  };
  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Signup</Text>
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
      <Button onPress={handleSubmit}>Signup</Button>
    </View>
  );
};

export default Signup;

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

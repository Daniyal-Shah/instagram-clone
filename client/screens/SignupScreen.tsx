import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useState } from "react";
import AuthButton from "../components/auth/AuthButton";
import LinkText from "../components/auth/LinkText";
import { api } from "../api/api";

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await api.createUserApi({ username, email, password });
      console.log(response);

      // setUsername("");
      // setEmail("");
      // setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/instagram-icon.png")}
        style={styles.icon}
      />
      <View style={styles.textFieldContainer}>
        <TextInput
          placeholder="Email"
          style={styles.textField}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Username"
          style={styles.textField}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.textField}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <AuthButton
          title={"Sign Up"}
          onPress={handleSubmit}
          btnStyles={styles.btnStyle}
        />
        <Text style={styles.signupLink}>
          Already have an account{" "}
          <LinkText
            text={"Login"}
            linkStyles={undefined}
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
          />
        </Text>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  icon: {
    width: 90,
    height: 90,
    marginBottom: 30,
  },
  textFieldContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  textField: {
    width: "100%",
    height: 50,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    textAlign: "center",
  },

  btnStyle: {
    backgroundColor: "#95C9F4",
    color: "white",
  },
  link: {
    marginHorizontal: 10,
  },
  signupLink: {
    textAlign: "center",
    marginVertical: 20,
  },
});

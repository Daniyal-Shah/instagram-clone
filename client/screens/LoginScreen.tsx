import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import AuthButton from "../components/auth/AuthButton";
import LinkText from "../components/auth/LinkText";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/instagram-icon.png")}
        style={styles.icon}
      />
      <View style={styles.textFieldContainer}>
        <TextInput placeholder="Username" style={styles.textField} />
        <TextInput placeholder="Password" style={styles.textField} />
        <LinkText
          text={"Forgot password ?"}
          linkStyles={styles.forgotLink}
          onPress={undefined}
        />
        <AuthButton
          title={"Log In"}
          onPress={undefined}
          btnStyles={styles.btnStyle}
        />
        <Text style={styles.signupLink}>
          Dont have an account ?{" "}
          <LinkText
            text={"Sign Up"}
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

export default LoginScreen;

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
  forgotLink: {
    textAlign: "right",
    marginBottom: 20,
  },
  signupLink: {
    textAlign: "center",
    marginVertical: 20,
  },
});

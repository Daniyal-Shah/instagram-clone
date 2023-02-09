import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const AuthButton = ({ title, onPress, btnStyles }) => {
  return (
    <Pressable style={{ ...styles.button, ...btnStyles }} onPress={onPress}>
      {title && <Text style={styles.text}>{title}</Text>}
    </Pressable>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 13,
    elevation: 3,
    backgroundColor: "#262626",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    // letterSpacing: 0.25,
    color: "white",
  },
});

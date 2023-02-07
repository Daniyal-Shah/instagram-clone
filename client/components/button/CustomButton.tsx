import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import EntypoIcons from "react-native-vector-icons/Entypo";

const CustomButton = ({ title, onPress, icon, btnStyles }) => {
  return (
    <Pressable style={{ ...styles.button, ...btnStyles }} onPress={onPress}>
      {title && <Text style={styles.text}>{title}</Text>}
      {icon && <EntypoIcons name={icon} color={"white"} size={22} />}
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 13,
    elevation: 3,
    backgroundColor: "#262626",
  },
  text: {
    fontSize: 14,
    // lineHeight: 21,
    fontWeight: "600",
    // letterSpacing: 0.25,
    color: "white",
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LinkText = ({ text, linkStyles, onPress }) => {
  return (
    <Text onPress={onPress} style={{ ...linkStyles, ...styles.text }}>
      {text}
    </Text>
  );
};

export default LinkText;

const styles = StyleSheet.create({
  text: {
    color: "#ACD1F6",
  },
});

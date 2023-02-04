import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Messages Screen</Text>
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 25,
  },
});

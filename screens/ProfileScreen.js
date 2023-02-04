import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;

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

import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import HeaderProfile from "../components/profile/HeaderProfile";
import BodyProfile from "../components/profile/BodyProfile";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderProfile />
      <BodyProfile />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: 20,
  },
});

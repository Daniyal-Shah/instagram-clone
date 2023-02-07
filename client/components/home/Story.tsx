import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Story = ({ data }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={["#CA1D7E", "#E35157", "#F2703F"]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.storyContainer}
      >
        <Image
          source={{
            uri: data.image,
          }}
          style={styles.story}
        />
      </LinearGradient>
      <Text style={styles.storyText}>
        {data.name.length > 11 ? data.name.slice(0, 10) + "..." : data.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  storyContainer: {
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 50,
  },
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    margin: 3,
  },
  storyText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

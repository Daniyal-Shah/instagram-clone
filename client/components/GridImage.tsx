import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const GridImage = ({ image, onPress, styles }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles}>
      <Image source={{ uri: image }} style={thisStyles.image} />
    </TouchableOpacity>
  );
};

export default GridImage;

const thisStyles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});

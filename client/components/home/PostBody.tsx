import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const PostBody = ({ postImage }) => {
  return <Image source={{ uri: postImage }} style={styles.image} />;
};

export default PostBody;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    resizeMode: "stretch",
  },
});

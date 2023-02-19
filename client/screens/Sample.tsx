import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RangeSlider from "../custom/RangeSlider";

const Sample = () => {
  return (
    <View style={styles.container}>
      <RangeSlider />
      {/* <Text>Sample</Text> */}
    </View>
  );
};

export default Sample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "lightgray",
  },
});

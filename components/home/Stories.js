import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Story from "./Story";

const Stories = ({ data }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Story data={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    marginBottom: 13,
    marginTop: 5,
    width: "100%",
  },

  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
  storyContainer: {
    alignItems: "center",
    marginHorizontal: 5,
  },
  storyText: {
    color: "white",
  },
});

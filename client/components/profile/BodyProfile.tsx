import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5Icons from "react-native-vector-icons/FontAwesome5";
import GridImage from "../GridImage";
import { fakeStories } from "../../utils/fakeData";

const BodyProfile = () => {
  const [option, setOption] = useState("posts");

  return (
    <View style={styles.container}>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          onPress={() => {
            setOption("posts");
          }}
          style={styles.option}
        >
          <View>
            <MaterialCommunityIcons
              name="grid"
              color={option == "posts" ? "white" : "gray"}
              size={30}
            />
          </View>
          {option == "posts" && <View style={styles.underline}></View>}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            setOption("tags");
          }}
        >
          <View>
            <FontAwesome5Icons
              name="user-tag"
              color={option == "tags" ? "white" : "gray"}
              size={30}
            />
          </View>
          {option == "tags" && <View style={styles.underline}></View>}
        </TouchableOpacity>
      </View>
      <View style={styles.gridContainer}>
        {fakeStories.map((item, index) => (
          <GridImage
            key={index + "-" + item.image}
            image={item.image}
            onPress={undefined}
            styles={{ margin: 2 }}
          />
        ))}
      </View>
    </View>
  );
};

export default BodyProfile;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  optionsContainer: {
    flexDirection: "row",
    // flexWrap: "wrap",
    // alignItems: "flex-start",
    marginVertical: 8,
  },

  option: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  underline: {
    width: "100%",
    height: 1,
    backgroundColor: "white",
    marginTop: 8,
    marginBottom: 4,
  },
  gridContainer: {
    // borderColor: "white",
    // borderWidth: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    paddingVertical: 20,
    // flex: 6,
  },
});

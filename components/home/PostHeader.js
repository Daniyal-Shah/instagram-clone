import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

const PostHeader = ({ userDP, userName }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <LinearGradient
            // Button Linear Gradient
            colors={["#CA1D7E", "#E35157", "#F2703F"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={styles.storyContainer}
          >
            <Image
              source={{
                uri: userDP,
              }}
              style={styles.story}
            />
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.storyText}>
            {userName.length > 18 ? userName.slice(0, 12) + "..." : userName}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Menu dots */}
      <View>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={22}
            style={styles.menu}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  container: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  story: {
    width: 32,
    height: 32,
    borderRadius: 50,
    borderWidth: 3,
    margin: 1,
  },
  storyContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 50,
  },
  storyText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },

  menu: {
    color: "white",
  },
});

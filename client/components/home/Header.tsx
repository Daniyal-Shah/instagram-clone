import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/img/instagram.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddPostScreen");
          }}
        >
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
            }}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
            }}
          />
        </TouchableOpacity> */}

        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>0</Text>
          </View>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 18,
  },
  logo: {
    width: 120,
    height: 50,
    color: "white",
    resizeMode: "contain",
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginHorizontal: 5,
  },

  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadText: {
    color: "white",
    fontWeight: "600",
  },
});

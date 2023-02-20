import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import { defaultStyles } from "../../utils/styles";
const UserItem = ({ userDP, userName }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: userDP }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.status}>Following</Text>
        </View>
      </View>
      <AntDesignIcons
        name="close"
        size={22}
        color="gray"
        style={styles.closeIcon}
      />
    </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: "100%",
    borderRadius: 25,
    flexDirection: "row",
    // borderColor: "white",
    // borderWidth: 1,
    // justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  userName: {
    color: "white",
    fontWeight: "900",
    fontSize: defaultStyles.userNameFontSize,
  },
  status: {
    color: "gray",
    fontWeight: "600",
    fontSize: defaultStyles.followingStatusFontSize,
  },
  detailsContainer: {
    marginLeft: 20,
    marginTop: 20,
  },
  closeIcon: { position: "absolute", right: 0 },
});

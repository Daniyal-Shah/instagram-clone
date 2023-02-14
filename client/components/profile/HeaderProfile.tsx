import { StyleSheet, Text, Image, View, Button } from "react-native";
import React from "react";
import CustomButton from "../button/CustomButton";

const HeaderProfile = () => {
  return (
    <>
      <View style={styles.headerContainer}>
        <View>
          <Image
            source={require("../../assets/img/user.jpg")}
            style={styles.userDP}
          />
          <Text style={styles.nameText}>Daniyal Shah</Text>
        </View>

        <View style={styles.numbersContainer}>
          <View style={styles.detailContainer}>
            <Text style={styles.numberText}>179</Text>
            <Text style={styles.text}>Posts</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.numberText}>483</Text>
            <Text style={styles.text}>Followers</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.numberText}>835</Text>
            <Text style={styles.text}>Following</Text>
          </View>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
          اب کے ملنے کی شرط یہ ہو گی دونوں گھڑیاں اُتار پھینکیں گے..❤
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={"Edit Profile"}
          onPress={undefined}
          icon={undefined}
          btnStyles={styles.button}
        />
        <CustomButton
          title={"Share Profile"}
          onPress={undefined}
          icon={undefined}
          btnStyles={styles.button}
        />
        <CustomButton
          icon={"add-user"}
          title={undefined}
          onPress={undefined}
          btnStyles={styles.button}
        />
      </View>
    </>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  userDP: {
    height: 90,
    width: 90,
    borderRadius: 50,
    resizeMode: "contain",
  },
  headerContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },

  numbersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailContainer: { marginHorizontal: 5, alignItems: "center" },
  nameText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  numberText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  bioContainer: {
    width: "50%",
    marginLeft: 20,
    marginBottom: 20,
  },
  bioText: {
    color: "white",
    textAlign: "left",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    marginRight: 5,
  },
});

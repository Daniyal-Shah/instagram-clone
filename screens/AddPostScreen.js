import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/button/CustomButton";
import * as ImagePicker from "expo-image-picker";
import IonicsIcons from "react-native-vector-icons/Ionicons";

const AddPostScreen = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer1}>
        <View>
          <View style={{ position: "relative" }}>
            <IonicsIcons
              name="add-circle"
              color="gray"
              style={styles.addImageIcon}
              size={25}
              onPress={pickImage}
            />
            <Image
              source={
                image ? { uri: image } : require("../assets/img/image-icon.png")
              }
              style={styles.image}
            />
          </View>
        </View>
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder="Write a caption here"
          placeholderTextColor={"gray"}
          onChangeText={(text) => {
            setCaption(text);
          }}
          value={caption}
          style={styles.caption}
        />
      </View>

      <View style={styles.divider}></View>

      <View>
        <CustomButton title={"Share Post"} btnStyles={{ margin: 20 }} />
      </View>
    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 80,
    marginRight: 20,
    resizeMode: "contain",
    borderRadius: 10,
  },
  innerContainer1: {
    flexDirection: "row",
  },
  divider: {
    backgroundColor: "gray",
    width: "100%",
    height: 1,
    marginVertical: 10,
  },
  caption: {
    color: "white",
  },
  selectBtn: {
    color: "gray",
  },
  addImageIcon: {
    position: "absolute",
    zIndex: 2,
    right: 23,
    top: 10,
  },
});

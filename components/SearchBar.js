import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
const SearchBar = ({ frontIcon, backIcon, placeholder, value, setText }) => {
  const [cancel, showCancel] = useState(false);
  return (
    <Pressable style={styles.container}>
      {frontIcon && (
        <AntDesignIcons
          name={frontIcon}
          color="gray"
          size={20}
          style={styles.frontIcon}
        />
      )}
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#9E9E9E"
        onChange={(text) => setText(text)}
        style={{ color: "#9E9E9E" }}
      />
      {/* {backIcon && cancel && <AntDesignIcons name={backIcon} color="gray" size={20} />} */}
    </Pressable>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 6,
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  frontIcon: {
    marginHorizontal: 10,
  },
});

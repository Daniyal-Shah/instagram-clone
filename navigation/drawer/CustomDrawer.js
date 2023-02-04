import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MessagesScreen from "../../screens/MessagesScreen";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: "black",
        }}
      >
        <MessagesScreen />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import TabNavigation from "../tabBar/TabNavigation";
import HomeScreen from "../../screens/HomeScreen";
import { Dimensions } from "react-native";
const DrawerNav = ({ navigation }) => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => (
        <CustomDrawer navigation={navigation} {...props} />
      )}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "black",
        drawerActiveTintColor: "black",
        drawerInactiveTintColor: "black",
        drawerLabelStyle: {
          fontSize: 15,
        },
        drawerStyle: {
          width: Dimensions.get("window").width,
        },
        drawerPosition: "right",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigation}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;

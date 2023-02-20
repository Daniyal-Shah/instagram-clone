import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontistoIcons from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import UserStackScreen from "../user/UserStack";

// Screens
import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import MessagesScreen from "../../screens/MessagesScreen";
import SearchScreen from "../../screens/SearchScreen";
import { constants } from "../../utils/constants";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  // Stylesheet
  let styles = StyleSheet.create({
    //Styles for Tab Bar
    tabBar: {
      position: "absolute",
      bottom: 25,
      left: 20,
      right: 20,
      elevation: 0,
      backgroundColor: "black",
      borderRadius: 15,
      height: 90,
    },

    tabBarFixed: {
      backgroundColor: "black",
      height: 42,
    },

    //Styles for tabbar shadow
    shadow: {
      shadowColor: "7F5DF0",
      shadowOffset: {
        height: 10,
        width: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 2,
    },
  });

  const getTintColor = (focused) => {
    return focused ? "lightgray" : "white";
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tabBarFixed, ...styles.shadow },
      }}
    >
      <Tab.Screen
        name={constants.HomeTab}
        component={UserStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {focused ? (
                <MaterialIcons name="home-filled" size={28} color={"white"} />
              ) : (
                <Octicons name="home" size={28} color={"white"} />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={constants.SearchTab}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {focused ? (
                <Ionicons name="search" color={"white"} size={28} />
              ) : (
                <Ionicons name="search-sharp" color={"white"} size={28} />
              )}
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="Tab 3"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {focused ? (
                <FontistoIcons name="messenger" color={"white"} size={28} />
              ) : (
                <Image
                  source={require("../../assets/img/messenger.png")}
                  style={{ width: 25, height: 25 }}
                />
              )}
            </View>
          ),
        }}
      /> */}
      <Tab.Screen
        name={constants.ProfileTab}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../assets/img/user.jpg")}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 50,
                  borderColor: "white",
                  borderWidth: focused ? 1 : 0,
                  resizeMode: "contain",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

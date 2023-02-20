import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import HomeScreen from "../../screens/HomeScreen";
import AddPostScreen from "../../screens/AddPostScreen";
import { constants } from "../../utils/constants";

const UserStack = createNativeStackNavigator();

const UserStackScreen = () => {
  return (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
      <UserStack.Screen
        name={constants.HomeScreenRoute}
        component={HomeScreen}
      />
      <UserStack.Screen
        name={constants.AddPostScreenRoute}
        component={AddPostScreen}
      />
    </UserStack.Navigator>
  );
};

export default UserStackScreen;

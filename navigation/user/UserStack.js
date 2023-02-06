import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import HomeScreen from "../../screens/HomeScreen";
import AddPostScreen from "../../screens/AddPostScreen";

const UserStack = createNativeStackNavigator();

const UserStackScreen = () => {
  return (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
      <UserStack.Screen name="HomeScreen" component={HomeScreen} />
      <UserStack.Screen name="AddPostScreen" component={AddPostScreen} />
    </UserStack.Navigator>
  );
};

export default UserStackScreen;

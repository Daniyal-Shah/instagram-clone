import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Auth Screens
import LoginScreen from "../../screens/LoginScreen";
import SignupScreen from "../../screens/SignupScreen";

export default function AuthStack() {
  const AuthStackScreen = createNativeStackNavigator();

  return (
    <AuthStackScreen.Navigator
      initialRouteName="SignupScreen"
      screenOptions={{ headerShown: false }}
    >
      <AuthStackScreen.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStackScreen.Screen name="SignupScreen" component={SignupScreen} />
    </AuthStackScreen.Navigator>
  );
}

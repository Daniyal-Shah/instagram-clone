import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Auth Screens
import LoginScreen from "../../screens/LoginScreen";
import SignupScreen from "../../screens/SignupScreen";
import { constants } from "../../utils/constants";

export default function AuthStack() {
  const AuthStackScreen = createNativeStackNavigator();

  return (
    <AuthStackScreen.Navigator
      initialRouteName={constants.LoginScreenRoute}
      screenOptions={{ headerShown: false }}
    >
      <AuthStackScreen.Screen
        name={constants.LoginScreenRoute}
        component={LoginScreen}
      />
      <AuthStackScreen.Screen
        name={constants.SignupScreenRoute}
        component={SignupScreen}
      />
    </AuthStackScreen.Navigator>
  );
}

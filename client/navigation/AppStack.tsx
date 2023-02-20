import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Drawer Screens
import DrawerNav from "./drawer/DrawerNav";
// AuthStack
import AuthStack from "./auth/AuthStack";
import { constants } from "../utils/constants";

const AppStack = () => {
  const MainStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={constants.AuthScreensRoute}
      >
        {/* Auth Screens*/}
        <MainStack.Screen
          name={constants.AuthScreensRoute}
          component={AuthStack}
        />

        {/* Main Screen*/}
        <MainStack.Screen
          name={constants.MainScreensRoute}
          component={DrawerNav}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;

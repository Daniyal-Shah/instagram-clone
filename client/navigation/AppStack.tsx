import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Drawer Screens
import DrawerNav from "./drawer/DrawerNav";
// AuthStack
import AuthStack from "./auth/AuthStack";

const AppStack = () => {
  const MainStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="AuthScreen"
      >
        {/* Auth Screens*/}
        <MainStack.Screen name="AuthScreen" component={AuthStack} />

        {/* Main Screen*/}
        <MainStack.Screen name="MainScreen" component={DrawerNav} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;

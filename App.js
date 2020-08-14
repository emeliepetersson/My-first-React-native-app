import React from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import { View } from "react-native";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  NetInfo.addEventListener((netInfo) => console.log(netInfo));

  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}

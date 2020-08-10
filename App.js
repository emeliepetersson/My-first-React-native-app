import React from "react";
import { Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";
import AuthNavigator from "./app/navigation/AuthNavigator";

// const Link = () => {
//   const navigation = useNavigation();

//   return (
//     <Button title="click" onPress={() => navigation.navigate("TweetDetails")} />
//   );
// };

// const Tweets = ({ navigation }) => {
//   return (
//     <Screen>
//       <Text>Tweets</Text>
//       <Button
//         title="Tweet Details"
//         onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
//       />
//     </Screen>
//   );
// };

// const TweetDetails = ({ route }) => {
//   return (
//     <Screen>
//       <Text>Tweet Details {route.params.id}</Text>
//     </Screen>
//   );
// };

// const Stack = createStackNavigator();
// const FeedNavigator = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: "dodgerblue" },
//         headerTintColor: "white",
//       }}
//     >
//       <Stack.Screen name="Tweets" component={Tweets} />
//       <Stack.Screen
//         name="TweetDetails"
//         component={TweetDetails}
//         options={
//           (({ route }) => ({ title: route.params.id }),
//           {
//             headerStyle: { backgroundColor: "tomato" },
//             headerTintColor: "white",
//           })
//         }
//       />
//     </Stack.Navigator>
//   );
// };

// const Account = () => {
//   return (
//     <Screen>
//       <Text>Account</Text>
//     </Screen>
//   );
// };

// const Tab = createBottomTabNavigator();
// const TabNavigator = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Feed" component={FeedNavigator} />
//       <Tab.Screen name="Account" component={Account} />
//     </Tab.Navigator>
//   );
// };

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

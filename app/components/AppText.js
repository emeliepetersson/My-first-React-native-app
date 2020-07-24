import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

//Destruct the props object and get the children property
function AppText({ children, extraStyle }) {
  return <Text style={[styles.text, extraStyle]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    //This method returns one of these objects depending on the current platform.
    //the dots ... spreads the object to copy it's properties into the text object.
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
});

export default AppText;

import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage }) {
  //FIRST, ASK THE USER FOR PERMISSION
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    //destruct the object because we only need the granted property
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library.");
    }
  };

  // SECOND, HANDLE ON PRESS AND UPDATE IMAGE URI
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  const selectImage = async () => {
    try {
      //the properties in launchImageLibraryAsync means that you can only pick images, not videos.
      //And the quality is ranged between 0 and 1, so 0.5 is in the middle. 0.5 is good so we don't have to deal with a large upload when uploading to the server.
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      //When the user selects an image we call onChangeImage and notify the consumer of this component that the image is changed.
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;

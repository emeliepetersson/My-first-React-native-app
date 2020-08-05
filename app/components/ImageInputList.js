import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {
            //If you have an image inside an ImageInput and the onChangeImage event is raised that means the user has deleted that image.
            //We don't want to maintain local state in this component, therefore we use onRemoveImage.
            imageUris.map((uri) => (
              <View key={uri} style={styles.image}>
                <ImageInput
                  imageUri={uri}
                  onChangeImage={() => onRemoveImage(uri)}
                />
              </View>
            ))
          }
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;

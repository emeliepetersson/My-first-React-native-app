import React, { useState } from "react";

import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();

  return (
    <Screen>
      <ImageInput
        imageUri={imageUri}
        //onChangeImage takes the uri of the new image and updates the state of setImageUri
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
}

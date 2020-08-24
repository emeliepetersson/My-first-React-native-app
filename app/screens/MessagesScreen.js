import React, { useState } from "react";
import { FlatList } from "react-native";

import ListItem from "../components/lisits/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/lisits/ListItemSeparator";
import ListItemDeleteAction from "../components/lisits/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Mosh Hamedani",
    description: "Hey! Is this item still available?",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Mosh Hamedani",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    //Delete the message from initialMessages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T3",
              description: "D3",
              image: require("../assets/mosh.jpg"),
            },
            {
              id: 2,
              title: "T4",
              description: "D4",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;

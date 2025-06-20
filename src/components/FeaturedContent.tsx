import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import FeaturedCard from "./FeaturedCard";
import { Ionicons } from "@expo/vector-icons";

const featuredVideos = [
  {
    id: "1",
    title: "Daily Conversation Practice",
    instructor: "Daily Spanish",
    duration: "10:21",
  },
  {
    id: "2",
    title: "Mastering Italian Verbs",
    instructor: "Italiano Vero",
    duration: "18:55",
  },
  {
    id: "3",
    title: "Essential German Phrases",
    instructor: "GermanPod101",
    duration: "12:30",
  },
];

const FeaturedContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Featured Content</Text>
        <Ionicons name="ellipsis-vertical" size={20} color="white" />
      </View>
      <FlatList
        data={featuredVideos}
        renderItem={({ item }) => <FeaturedCard video={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#282828",
    borderBottomWidth: 1,
    borderBottomColor: "#282828",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  list: {
    paddingHorizontal: 16,
  },
});

export default FeaturedContent;

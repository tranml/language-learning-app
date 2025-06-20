import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ShortsCard from "./ShortsCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const shortsData = [
  { id: "1", title: 'How to say "Hello" in 10 languages' },
  { id: "2", title: "Common mistakes in English" },
  { id: "3", title: "Japanese numbers 1-10" },
  { id: "4", title: "French pronunciation tips" },
];

const ShortsGrid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="youtube" size={28} color="#FF0000" />
        <Text style={styles.title}>Shorts</Text>
      </View>
      <FlatList
        data={shortsData}
        renderItem={({ item }) => <ShortsCard lesson={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        scrollEnabled={false}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#282828",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
  },
  grid: {
    paddingHorizontal: 12,
  },
});

export default ShortsGrid;

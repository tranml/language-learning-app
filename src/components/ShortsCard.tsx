import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ShortsCard = ({ lesson }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="ellipsis-horizontal"
        size={20}
        color="white"
        style={styles.optionsIcon}
      />
      <Text style={styles.title}>{lesson.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
    borderRadius: 8,
    backgroundColor: "#383838",
    aspectRatio: 9 / 16,
    padding: 8,
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  optionsIcon: {
    alignSelf: "flex-end",
  },
});

export default ShortsCard;

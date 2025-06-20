import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const filters = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
  "Conversation",
  "Grammar",
];

const FilterChips = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.chip}>
          <Ionicons name="compass-outline" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.separator} />
        {filters.map((filter, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.chip, filter === "All" ? styles.activeChip : {}]}
          >
            <Text
              style={[
                styles.chipText,
                filter === "All" ? styles.activeChipText : {},
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: "black",
    borderBottomWidth: 1,
    borderBottomColor: "#282828",
  },
  chip: {
    backgroundColor: "#282828",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  activeChip: {
    backgroundColor: "white",
  },
  chipText: {
    color: "white",
  },
  activeChipText: {
    color: "black",
  },
  separator: {
    width: 1,
    backgroundColor: "#282828",
    marginHorizontal: 8,
  },
});

export default FilterChips;

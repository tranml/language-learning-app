import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

const TabBar = () => {
  return (
    <View style={styles.tabBarContainer}>
      <TouchableOpacity style={styles.tabItem}>
        <MaterialCommunityIcons name="home" size={26} color="white" />
        <Text style={styles.tabLabel}>Learn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <MaterialCommunityIcons name="star-outline" size={26} color="white" />
        <Text style={styles.tabLabel}>Review</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton}>
        <Feather name="plus" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <MaterialCommunityIcons name="trophy-outline" size={26} color="white" />
        <Text style={styles.tabLabel}>Leaderboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Feather name="user" size={26} color="white" />
        <Text style={styles.tabLabel}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    borderTopWidth: 1,
    borderTopColor: "#333",
    paddingVertical: 8,
    paddingBottom: 20,
  },
  tabItem: {
    alignItems: "center",
    flex: 1,
  },
  tabLabel: {
    color: "white",
    fontSize: 10,
    marginTop: 4,
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    bottom: 15,
  },
});

export default TabBar;

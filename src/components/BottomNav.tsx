import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const BottomNav = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        <Ionicons name="home" size={24} color="white" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <MaterialCommunityIcons name="lightning-bolt" size={24} color="white" />
        <Text style={styles.label}>Shorts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Ionicons name="add-circle-outline" size={40} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <MaterialCommunityIcons
          name="youtube-subscription"
          size={24}
          color="white"
        />
        <Text style={styles.label}>Subscriptions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Ionicons name="person-circle-outline" size={24} color="white" />
        <Text style={styles.label}>You</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
    borderTopWidth: 1,
    borderTopColor: "#282828",
    paddingVertical: 8,
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "white",
    fontSize: 10,
    marginTop: 4,
  },
});

export default BottomNav;

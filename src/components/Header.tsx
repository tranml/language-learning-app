import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Language App</Text>
      <View style={styles.iconsContainer}>
        <MaterialCommunityIcons
          name="cast"
          size={24}
          color="white"
          style={styles.icon}
        />
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={styles.icon}
        />
        <Ionicons name="search" size={24} color="white" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "black",
  },
  logo: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 20,
  },
});

export default Header;

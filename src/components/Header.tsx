import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Feather name="globe" size={28} color="white" />
        <Text style={styles.headerTitle}>English</Text>
      </View>
      <Feather name="more-vertical" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: "#000",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default Header;

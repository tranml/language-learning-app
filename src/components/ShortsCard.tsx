import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

interface ShortsCardProps {
  title: string;
  imageUrl: string;
}

const ShortsCard: React.FC<ShortsCardProps> = ({ title, imageUrl }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.menuIcon}>
        <Feather name="more-vertical" size={20} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "48%",
    aspectRatio: 9 / 16,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
    backgroundColor: "#333",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  menuIcon: {
    position: "absolute",
    top: 12,
    right: 12,
  },
});

export default ShortsCard;

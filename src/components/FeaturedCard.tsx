import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FeaturedCard = ({ video }) => {
  return (
    <View style={styles.container}>
      <View style={styles.thumbnail}>
        <Text style={styles.duration}>{video.duration}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.metaContainer}>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.metadata}>{video.instructor}</Text>
        </View>
        <Ionicons name="ellipsis-vertical" size={16} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    marginRight: 15,
  },
  thumbnail: {
    width: "100%",
    height: 140,
    backgroundColor: "#383838",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderRadius: 8,
  },
  duration: {
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "white",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    margin: 8,
    fontSize: 12,
  },
  detailsContainer: {
    flexDirection: "row",
    paddingTop: 8,
  },
  metaContainer: {
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  metadata: {
    color: "gray",
    fontSize: 12,
    marginTop: 3,
  },
});

export default FeaturedCard;

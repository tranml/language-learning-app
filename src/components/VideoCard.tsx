import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const VideoCard = ({ video }) => {
  return (
    <View style={styles.container}>
      <View style={styles.thumbnail}>
        <Text style={styles.duration}>{video.duration}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.avatar} />
        <View style={styles.metaContainer}>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.metadata}>
            {video.instructor} · {video.views} views · {video.uploaded}
          </Text>
        </View>
        <Ionicons name="ellipsis-vertical" size={20} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  thumbnail: {
    width: "100%",
    height: 210,
    backgroundColor: "#383838",
    justifyContent: "flex-end",
    alignItems: "flex-end",
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
    padding: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#383838",
    marginRight: 12,
  },
  metaContainer: {
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  metadata: {
    color: "gray",
    fontSize: 12,
    marginTop: 3,
  },
});

export default VideoCard;

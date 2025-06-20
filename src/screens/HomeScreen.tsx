import React from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import Header from "../components/Header";
import FilterChips from "../components/FilterChips";
import VideoCard from "../components/VideoCard";
import BottomNav from "../components/BottomNav";
import FeaturedContent from "../components/FeaturedContent";

const dummyVideos = [
  {
    id: "1",
    title: "Spanish for Beginners | Lesson 1",
    instructor: "Pro Spanish",
    views: "1.2M",
    uploaded: "2 weeks ago",
    duration: "15:30",
  },
  {
    id: "2",
    title: "Advanced French Grammar | Subjunctive Mood",
    instructor: "French with Pierre",
    views: "480K",
    uploaded: "1 month ago",
    duration: "22:10",
  },
  {
    id: "3",
    title: "Travel Phrases for Japan",
    instructor: "JapanoLingo",
    views: "890K",
    uploaded: "3 days ago",
    duration: "08:45",
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FilterChips />
      <FlatList
        ListHeaderComponent={<FeaturedContent />}
        data={dummyVideos}
        renderItem={({ item }) => <VideoCard video={item} />}
        keyExtractor={(item) => item.id}
        style={styles.feed}
      />
      <BottomNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  feed: {
    flex: 1,
  },
});

export default HomeScreen;

import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ShortsCard from "./ShortsCard";

const shortsData = [
  {
    id: "1",
    title: "Common French Phrases",
    imageUrl: "https://picsum.photos/seed/1/200/300",
  },
  {
    id: "2",
    title: "German Noun Genders",
    imageUrl: "https://picsum.photos/seed/2/200/300",
  },
  {
    id: "3",
    title: "Spanish Verb Conjugation",
    imageUrl: "https://picsum.photos/seed/3/200/300",
  },
  {
    id: "4",
    title: "Japanese Particles Guide",
    imageUrl: "https://picsum.photos/seed/4/200/300",
  },
  {
    id: "5",
    title: "Essential Italian Idioms",
    imageUrl: "https://picsum.photos/seed/5/200/300",
  },
  {
    id: "6",
    title: "Korean Alphabet in 10 Min",
    imageUrl: "https://picsum.photos/seed/6/200/300",
  },
];

const ShortsGrid = () => {
  return (
    <FlatList
      data={shortsData}
      renderItem={({ item }) => (
        <ShortsCard title={item.title} imageUrl={item.imageUrl} />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
      style={styles.gridContainer}
      columnWrapperStyle={styles.row}
    />
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    paddingHorizontal: 8,
  },
  row: {
    justifyContent: "space-between",
  },
});

export default ShortsGrid;

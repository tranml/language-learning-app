import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Header from "../components/Header";
import ShortsGrid from "../components/ShortsGrid";
import TabBar from "../components/TabBar";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <ShortsGrid />
      </View>
      <TabBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  content: {
    flex: 1,
  },
});

export default HomeScreen;

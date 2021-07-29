import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import Header from "./src/components/Header";
import Content from "./src/components/Content";
import Footer from "./src/components/Footer";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text></Text>
        <Header />

        <Content />

        <Footer />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

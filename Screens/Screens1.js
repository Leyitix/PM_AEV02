import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const Screen1 = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Pantalla 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Screen1;

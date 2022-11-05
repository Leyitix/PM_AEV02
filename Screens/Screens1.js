import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Crosswords from "./crosswords";
import Quizz from "./quizz";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const Screen1 = () => {
  return (
    <Drawer.Navigator initialRouteName="Screen1">
      <Drawer.Screen name="Crosswords" component={Crosswords} />
      <Drawer.Screen name="Quizz" component={Quizz} />
    </Drawer.Navigator>
  );
};

export default Screen1;

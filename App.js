import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Screen1 from "./screens/Screen1";
import "./polyfills";

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator options="false">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Screen1" component={Screen1} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

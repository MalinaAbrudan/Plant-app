import React from "react";
import {Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

//Screens
import PlantDetail from "./screens/PlantDetail"
import Home from "./screens/Home.js";

//Tabs
import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions = {{
          headerShown: false
        }}
        // initialRouteName="Home"
        >
          {/* Tabs */}
          <Stack.Screen name="Home" component={Tabs} />
          
          {/*Screens*/}

          <Stack.Screen name="PlantDetail" component={PlantDetail} options={{headerShown: false}} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return <App />;
}
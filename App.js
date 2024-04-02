import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './menu';
import RepetitionExercise from './repetition';
import DurationExercise from './duration';
import BenchExercise from './bench';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  console.log("App.js loaded"); 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="RepetitionExercise" component={RepetitionExercise} />
        <Stack.Screen name="DurationExercise" component={DurationExercise} />
        <Stack.Screen name="BenchExercise" component={BenchExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;










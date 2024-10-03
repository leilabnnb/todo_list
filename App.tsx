import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeSc from './src/screens/HomeSc'

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                 name="Home"
                 component={HomeSc}
                 options={{title: 'Todo List'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


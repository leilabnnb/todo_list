import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ToDoProvider } from './src/contexts/ToDoContext';
import HomeScreen from './src/screens/HomeScreen'
import AddScreen from './src/screens/AddScreen'

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <ToDoProvider>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                     name="Home"
                     component={HomeScreen}
                     options={{
                        title: "To Do List",
                        headerTitleStyle:{
                            fontSize: 24,
                            fontWeight:'bold',
                            color: '#bd8b86'
                        },


                     }}
                />
                <Stack.Screen
                     name="Add"
                     component={AddScreen}
                     options={{
                        title: "Ajouter une tâche",

                     }}
                />
            </Stack.Navigator>
        </NavigationContainer>
        </ToDoProvider>
    );
}


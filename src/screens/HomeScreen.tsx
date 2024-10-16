import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {styles} from '../styles/HomeScreenStyles';


const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

      <Button
        title="Add a new TODO"
        onPress= {()=> navigation.navigate('Add')}
      />

      <Button
              title="Remove TODOS"
              onPress= {()=> navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;

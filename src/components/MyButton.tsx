import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles/Styles';

const MyButton = ({title, onPress}) => {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default MyButton;
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './Styles';


export function BatButton() {
    return (
        <Pressable style={styles.button} >
            <Text style={styles.buttonText}>Emitir sinal</Text>
        </Pressable>
    );
}
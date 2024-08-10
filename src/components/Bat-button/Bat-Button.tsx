import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './Styles';
import { BatButtonProps } from '../../interfaces/BatButtonProps/BatButtonProps';


export function BatButton({ onPress, text }: BatButtonProps) {
    return (
        <Pressable style={styles.button} onPress={onPress} >
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
}
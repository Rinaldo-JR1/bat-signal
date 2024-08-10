import React from 'react';
import { styles } from './Styles';
import { Text, TextInput, View } from 'react-native';
import { BatFormInputProps } from '../../interfaces/BatFormInputProps/BatFormInputProps';



export function BatFormInput({ label }: BatFormInputProps) {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.label}>{label}:</Text>
      </View>
      <View>
        <TextInput placeholder={label} style={styles.TextInput} />
      </View>
    </View>
  );
}
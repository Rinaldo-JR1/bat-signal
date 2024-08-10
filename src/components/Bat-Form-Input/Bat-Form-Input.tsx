import React from 'react';
import { styles } from './Styles';
import { Text, TextInput, View } from 'react-native';
import { BatFormInputProps } from '../../interfaces/BatFormInputProps/BatFormInputProps';



export function BatFormInput({ label, numberOfLines }: BatFormInputProps) {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.label}>{label}:</Text>
      </View>
      <View>
        <TextInput
          multiline={numberOfLines ? true : false}
          numberOfLines={numberOfLines}
          placeholder={label}

          style={[styles.TextInputText, numberOfLines ?
            {
              height: 400 / numberOfLines,
              textAlignVertical: 'top'
            }
            : undefined]}
        />
      </View>
    </View>
  );
}
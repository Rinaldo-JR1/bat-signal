import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './Styles';
import { ScreenProps } from '../../interfaces/ScreenProps/ScreenProps';

export function BatForm({ setIsForm }: ScreenProps) {
    return (
        <View style={styles.container}>
            <Text onPress={() => {
                setIsForm(false)
            }}>Formulário</Text>
        </View>
    );
}
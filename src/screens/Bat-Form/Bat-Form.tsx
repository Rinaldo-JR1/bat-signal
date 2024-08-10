import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './Styles';
import { ScreenProps } from '../../interfaces/ScreenProps/ScreenProps';
import { TopForm } from '../../components/Top-Form/Top-Form';
import { BatButton } from '../../components/Bat-button/Bat-Button';

export function BatForm({ setIsForm }: ScreenProps) {
    const finishForm = () => {
        setIsForm(false)
    }
    return (
        <View style={styles.container}>
            <TopForm />
            <BatButton text='Emitir Sinal' onPress={finishForm} />
        </View>
    );
}
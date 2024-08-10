import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from './Styles';
import { ScreenProps } from '../../interfaces/ScreenProps/ScreenProps';
import { TopForm } from '../../components/Top-Form/Top-Form';
import { BatButton } from '../../components/Bat-button/Bat-Button';
import { BatFormInput } from '../../components/Bat-Form-Input/Bat-Form-Input';
import { BatFormInputProps } from '../../interfaces/BatFormInputProps/BatFormInputProps';

export function BatForm({ setIsForm }: ScreenProps) {

    const items: BatFormInputProps[] = [
        { label: 'Nome' },
        { label: 'Cidade' },
        { label: 'Quais vilões', numberOfLines: 4 },
        { label: 'O que estão fazendo', numberOfLines: 4 },
    ]
    const buildForm = () => {
        return items.map((item, index) => {
            return <BatFormInput key={index} numberOfLines={item.numberOfLines} label={item.label} />
        })
    }
    const finishForm = () => {
        setIsForm(false)
    }
    return (
        <View style={styles.container}>
            <TopForm />
            {buildForm()}
            <BatButton text='Emitir Sinal' onPress={finishForm} />
        </View>
    );
}
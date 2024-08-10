import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './Styles';
import { BatLogo } from '../../components/Bat-logo/Bat-logo';
import { BatButton } from '../../components/Bat-button/Bat-Button';
import { ScreenProps } from '../../interfaces/ScreenProps/ScreenProps';

export function Home({ setIsForm }: ScreenProps) {
  const emitSignal = () => {
    setIsForm(true)
  }
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 90, paddingBottom: 70 }}>
        <BatLogo height={300} />
      </View>
      <BatButton text='Pedir Ajuda' onPress={emitSignal} />
    </View>
  );
}
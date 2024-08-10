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
      <BatLogo />
      <BatButton onPress={emitSignal} />
    </View>
  );
}
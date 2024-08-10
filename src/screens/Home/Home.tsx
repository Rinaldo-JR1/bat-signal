import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './Styles';
import { BatLogo } from '../../components/Bat-logo/Bat-logo';
import { BatButton } from '../../components/Bat-button/Bat-Button';

export function Home() {
  return (
    <View style={styles.container}>
      <BatLogo />
      <BatButton />
    </View>
  );
}
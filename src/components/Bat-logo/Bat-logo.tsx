import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './Styles';
import batLogo from '../../../assets/pictures/bat-logo.jpg';

export function BatLogo() {
    return (
        <View style={styles.container}>
            <Image source={batLogo} />
        </View>
    );
}
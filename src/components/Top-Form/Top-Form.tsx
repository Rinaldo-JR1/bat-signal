import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './Styles';
import { BatLogo } from '../Bat-logo/Bat-logo';

export function TopForm() {
    return (
        <View style={styles.container}>
            <BatLogo height={100} />
        </View>
    );
}
import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './Styles';
import batLogo from '../../../assets/pictures/bat-logo.jpg';
interface props {
    height: number;
}

export function BatLogo({ height }: props) {
    return (
        <Image source={batLogo} style={{ height: height, width: height }} />
    );
}
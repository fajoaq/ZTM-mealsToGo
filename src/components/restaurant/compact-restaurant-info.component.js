import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import WebView from 'react-native-webview';

import { Text } from '../typography/text.component';

const CompactImage = styled.Image`
    width: 120px;
    height: 100px;
`;

const CompactWebview = styled(WebView)`
    width: 120px;
    height: 100px;
`;

const Item = styled.View`
    border-radius: 10px;
    padding: 10px;
    max-width: 120px;
    align-items: center
`;

const isAndroid = Platform.OS === 'android';

export const CompactRestaurantInfo = ({ restaurant }) => {
    const Image = isAndroid ? CompactWebview : CompactImage;
    return (
        <Item>
            <Image source={{ uri: restaurant.photos[0] }} />
            <Text variant="label">{ restaurant.name }</Text>
        </Item>
    );
} 
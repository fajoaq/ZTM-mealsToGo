import React from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

import { Search } from '../components/search.component';

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`;

export const MapScreen = () => (
    <React.Fragment>
        <Search />
        <Map />
    </React.Fragment>
);
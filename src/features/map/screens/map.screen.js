import React, { useContext, useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { Search } from '../components/search.component';

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`;

export const MapScreen = () => {
    const { location } = useContext(LocationContext);
    const { lat, lng, viewport } = location;
    const { restaurants = [] } = useContext(RestaurantsContext);
    const [latDelta, setLatDelta] = useState(0);

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setLatDelta(northeastLat - southwestLat);
    }, [location, viewport])
    
    return (
        <React.Fragment>
            <Search />
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,
                }}
            >
                { restaurants.map((restaurant) => null) 
                }
            </Map>
        </React.Fragment>
    );
};

/* 
<MapView.Marker
coordinate={{
    
}}
>
</MapView.Marker> */
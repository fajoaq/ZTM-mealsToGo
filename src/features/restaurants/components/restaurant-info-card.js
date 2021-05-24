import React from 'react';
import { Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export const RestaurantInfoCard = ({ restaurant={} }) => {
    const {
        name="Some Restaurant",
        icon,
        photos=[
            "https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-1.jpg"
        ],
        address="Some random street",
        rating=4,
        openNow=true,
        isClosedTemporarily
    } = restaurant;

    return (
        <Card key={name} style={{ marginBottom: 10 }}>
            <Card.Cover source={{ uri: photos[0] }} />
            <Card.Title title={name} subtitle={address} />
        </Card>
    );
};
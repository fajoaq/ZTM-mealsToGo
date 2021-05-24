import React from 'react';
import { Avatar, Button, Card, Paragraph } from 'react-native-paper';
import styled from 'styled-components/native';

const RestaurantCard = styled(Card)`
    background-color: white;
    margin-bottom: 10px;
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: 16px;
    background-color: white;
`;

const Title = styled.Text`
    padding: 16px;
    color: red;
`;

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
        <RestaurantCard elevation={5} key={name}>
            <RestaurantCardCover source={{ uri: photos[0] }} />
            <Title>{ name }</Title>
        </RestaurantCard>
    );
};
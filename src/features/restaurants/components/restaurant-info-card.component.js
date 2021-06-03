import React from 'react';
import { Avatar, Button, Card, Paragraph } from 'react-native-paper';
import {SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import star from '../../../../assets/star';

const RestaurantCard = styled(Card)`
    background-color: ${props => props.theme.colors.bg.primary};
    margin-bottom: ${props => props.theme.space[0]};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${props => props.theme.space[3]};
    background-color: ${props => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading}
    font-size: ${(props) => props.theme.fontSizes.body}
    color: ${props => props.theme.colors.ui.primary};
`;

const Info = styled.View`
    padding: ${(props) => props.theme.space[3]}
`;

const Rating = styled.View`
    flex-direction: row
    padding-top: ${(props) => props.theme.space[2]}
    padding-bottom: ${(props) => props.theme.space[2]}
`;

const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body}
    font-size: ${(props) => props.theme.fontSizes.caption}
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

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5} key={name}>
            <RestaurantCardCover source={{ uri: photos[0] }} />
            <Info>
                <Title>{ name }</Title>
                <Rating>
                    { ratingArray.map((_,index) => (<SvgXml key={index} xml={ star } width={ 20 } height={ 20 } />
                    ))}
                </Rating>
                <Address>{ address }</Address>
            </Info>
        </RestaurantCard>
    );
};
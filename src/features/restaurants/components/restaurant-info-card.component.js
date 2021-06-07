import React from 'react';
import { Image, Text } from 'react-native';
import { Card } from 'react-native-paper';
import {SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.component';

const RestaurantCard = styled(Card)`
    background-color: ${props => props.theme.colors.bg.primary};
    margin-bottom: ${props => props.theme.space[0]};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${props => props.theme.space[3]};
    background-color: ${props => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${props => props.theme.colors.ui.primary};
`;

const Info = styled.View`
    padding: ${(props) => props.theme.space[3]}
`;

const Rating = styled.View`
    flex-direction: row;
    align-items: center;
    padding-top: ${(props) => props.theme.space[2]}
    padding-bottom: ${(props) => props.theme.space[2]}
`;

const Section = styled.View`
    flex-direction: row;
    align-items: center;
`;

const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

const Open = styled(SvgXml)``;

const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const RestaurantInfoCard = ({ restaurant={} }) => {
    const {
        name="Some Restaurant",
        icon="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos=[
            "https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-1.jpg"
        ],
        address="Some random street",
        rating=4,
        isOpenNow=true,
        isClosedTemporarily=false
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5} key={name}>
            <RestaurantCardCover source={{ uri: photos[0] }} />
            <Info>
                <Title>{ name }</Title>
                <Section>
                    <Rating>
                    { ratingArray.map((_,index) => (<SvgXml key={index} xml={ star } width={ 20 } height={ 20 } />
                        ))}
                    </Rating>
                    <SectionEnd>
                        { isClosedTemporarily && 
                            <Text variant="label" style={{ color: 'red' }}>Closed Temporarily</Text> 
                        }
                        <Spacer position='left' size='large'>
                        { isOpenNow && 
                            <SvgXml style={{ }} xml={ open } width={ 20 } height={ 20 } /> 
                        }
                        </Spacer>
                        <Spacer position='left' size='large'>
                            <Image style={{ width: 15, height: 15}}  source={{uri: icon}} />    
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{ address }</Address>
            </Info>
        </RestaurantCard>
    );
};
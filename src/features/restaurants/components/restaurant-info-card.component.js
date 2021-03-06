import React from 'react';
import { SvgXml } from 'react-native-svg';

import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { Favourite } from '../../../components/Favourites/favourite.component';
import { 
    RestaurantCard,
    RestaurantCardCover,
    Info,
    Rating,
    Section,
    SectionEnd,
    Address,
    Icon
} from './restaurant-info-card-styles';

export const RestaurantInfoCard = ({ restaurant={} }) => {
    const {
        name="Some Restaurant",
        icon="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos=[
            "https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-1.jpg"
        ],
        address="Some address",
        rating=4,
        isOpenNow=true,
        isClosedTemporarily=true,
        placeId
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5}>
            <Favourite restaurant={ restaurant } />
            <RestaurantCardCover source={{ uri: photos[0] }} />
            <Info>
                <Text>{ name }</Text>
                <Section>
                    <Rating>
                    { ratingArray.map((_,i) => 
                        (<SvgXml 
                            key={`star-${placeId}-${i}`} 
                            xml={ star } 
                            width={ 20 } 
                            height={ 20 } 
                        />))}
                    </Rating>
                    <SectionEnd>
                        { isClosedTemporarily && 
                            <Text variant="error" >Closed Temporarily</Text> 
                        }
                        <Spacer position='left' size='large'>
                        { isOpenNow && 
                            <SvgXml style={{ }} xml={ open } width={ 20 } height={ 20 } /> 
                        }
                        </Spacer>
                        <Spacer position='left' size='large'>
                            <Icon source={{uri: icon}} />    
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{ address }</Address>
            </Info>
        </RestaurantCard>
    );
};
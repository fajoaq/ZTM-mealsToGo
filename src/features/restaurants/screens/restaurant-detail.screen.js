import React, { useState } from 'react';
import { Platform, View, ScrollView } from 'react-native';
import { List } from 'react-native-paper';

import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const IS_IOS = Platform.OS === 'ios';

export const RestaurantDetailScreen = ({ route }) => {
    const { restaurant } = route.params;
    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    const handlePress = (callback) => {
        setBreakfastExpanded(false);
        setLunchExpanded(false);
        setDinnerExpanded(false);
        setDrinksExpanded(false);

        callback();
    };

    const component = (
        <ScrollView>
            <RestaurantInfoCard restaurant={restaurant} />
            <List.AccordionGroup>
                <List.Accordion
                    id="1"
                    title="Breakfast"
                    left={ props => <List.Icon {...props} icon="bread-slice" />}
                    expanded={ breakfastExpanded }
                    onPress={ () => setBreakfastExpanded(!breakfastExpanded)}
                >
                    <List.Item title="Eggs Benedict" />
                    <List.Item title="Classic Breakfast" />
                </List.Accordion>

                <List.Accordion
                    id="2"
                    title="Lunch"
                    left={ props => <List.Icon {...props} icon="hamburger" />}
                    expanded={ lunchExpanded }
                    onPress={ () => setLunchExpanded(!lunchExpanded)}
                >
                    <List.Item title="Burger with Fries" />
                    <List.Item title="Steak Sandwhich" />
                    <List.Item title="Mushroom Soup" />
                </List.Accordion>

                <List.Accordion
                    id="3"
                    title="Dinner"
                    left={ props => <List.Icon {...props} icon="food-variant" />}
                    expanded={ dinnerExpanded }
                    onPress={ () => setDinnerExpanded(!dinnerExpanded)}
                >
                    <List.Item title="Spaghetti Bolognese" />
                    <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
                    <List.Item title="Steak Fries" />
                </List.Accordion>

                <List.Accordion
                    id="4"  
                    title="Drinks"
                    left={ props => <List.Icon {...props} icon="cup" />}
                    expanded={ drinksExpanded }
                    onPress={ () => setDrinksExpanded(!drinksExpanded)}
                >
                    <List.Item title="Coffee" />
                    <List.Item title="Tea" />
                    <List.Item title="Modelo" />
                    <List.Item title="Coke" />
            </List.Accordion>
            </List.AccordionGroup>
        </ScrollView>
    )

    if(IS_IOS) return (
        <SafeArea>
            { component }
        </SafeArea>
    );
    // Else, render for android
    return (
        <React.Fragment>
            { component }
        </React.Fragment>
    );
};
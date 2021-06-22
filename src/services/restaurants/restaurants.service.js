import { mockImages, mocks } from "./mock";
import camelize from 'camelize';

export const restaurantsRequest = async (location = "37.7749295,-122.4194155") => {
    const mock = await mocks[location];

    if(!mock) return new Error("Not found");

    return mock;
};

export const restaurantsTransform = ({ results=[] }) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() *   (mockImages.length - 1))];
        });
        
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY'
        }
    });

    return camelize(mappedResults);
};
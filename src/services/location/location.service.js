import camelize from 'camelize';

import { locations } from './location.mock';

export const locationRequest = async (searchTerm) => {
    try {
        return await { ...locations[searchTerm] };
    } catch (error) {
        return({ error });
    }
};

export const locationTransform = ({ results }) => {
    const formattedResponse = camelize(results);
    const { geometry = {} } = formattedResponse[0];
    const { lat, lng }  = geometry.location
    
    return { lat, lng, viewport: geometry.viewport };
}
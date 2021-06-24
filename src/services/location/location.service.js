import camelize from 'camelize';

import { locations } from './location.mock';

export const locationRequest = async (searchTerm) => {
    try {
        return await locations[searchTerm];
    } catch (error) {
        console.log(error)
    }
};

export const locationTransform = ({ result }) => {
    const formattedResponse = camelize(result);
    const { geomertry = {} } = formattedResponse[0];
    const { lat, lng }  = geomertry.location
    
    return { lat, lng };
}
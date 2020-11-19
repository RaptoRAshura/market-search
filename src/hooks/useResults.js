import { useEffect, useState } from 'react';
import Yelp from '../api/Yelp';

export default () => {
    const[ errorLog, setErrorLog ] = useState('');
    const[ results, setResults ] = useState([]);
    const getSearchResult = async ( searchTerm ) => {
        try{
            const response = await Yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'New Jersey'
                }
            });
            setResults( response.data.businesses );
        }
        catch( error ){
            console.log( error );
        }
    }
    useEffect( () => { getSearchResult('Pizza') }, [] );
    return [ results, getSearchResult, errorLog ]; 
}
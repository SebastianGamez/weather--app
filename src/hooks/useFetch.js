import { useState, useEffect } from 'react';
import { fetchSearch } from '../helpers/fetchSearch';

export const useFetch = (weather, url) => {
    
    const [state, setState] = useState({loaded: false, data: null});

    useEffect(() => {
        
        fetchSearch(url)
            .then(data => setState({

                loaded: true,
                data

            }));
        
    }, [weather, url]);

    return state;

}

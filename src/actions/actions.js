import { 
    CHANGE_SEARCH_FIELD, 
    SELECT_REGION,
    REQUEST_COUNTRIES_PENDING,
    REQUEST_COUNTRIES_SUCCESS,
    REQUEST_COUNTRIES_FAIL

} from '../constants/index';

import * as axios from 'axios';

export const  setSearchField = (text) =>({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const setFilteredRegion = (text) => ({
    type: SELECT_REGION,
    payload: text
});

export  const requestCountries = () =>  dispatch => {
     dispatch({type: REQUEST_COUNTRIES_PENDING});
     axios({method:'get', url:'https://restcountries.eu/rest/v2/all'})
        .then(res => dispatch({type: REQUEST_COUNTRIES_SUCCESS, payload: res.data}))
        .catch((error) => dispatch({type: REQUEST_COUNTRIES_FAIL, payload: error}));
}
import { 
    CHANGE_SEARCH_FIELD, 
    SELECT_REGION,
    REQUEST_COUNTRIES_PENDING,
    REQUEST_COUNTRIES_SUCCESS,
    REQUEST_COUNTRIES_FAIL,
    SELECT_COUNTRY,
    CHANGE_THEME,
    REQUEST_COUNTRY_PENDING,
    REQUEST_COUNTRY_SUCCESS,
    REQUEST_COUNTRY_FAIL,

} from '../constants/index';

import * as axios from 'axios';

export const  setSearchField = (searchInput) =>({
    type: CHANGE_SEARCH_FIELD,
    payload: searchInput
});

export const setFilteredRegion = (filter) => ({
    type: SELECT_REGION,
    payload: filter
});

export  const requestCountries = () =>  dispatch => {
     dispatch({type: REQUEST_COUNTRIES_PENDING});
     fetch('https://restcountries.com/v3.1/all')
        .then(res => dispatch({type: REQUEST_COUNTRIES_SUCCESS, payload: res.data}))
        .catch(error => dispatch({type: REQUEST_COUNTRIES_FAIL, payload: error}));
}

export const changeTheme = (bool) => ({
    type: CHANGE_THEME,
    payload: bool   
});

export const selectCountry = (country) => ({
    type: SELECT_COUNTRY,
    payload: country
});


export const requestCountry = () => dispatch => {
    dispatch({type: REQUEST_COUNTRY_PENDING});
    let countryCode = window.location.href.split("/")[3];
    axios({method: 'get', url: `https://restcountries.eu/rest/v2/name/${countryCode}`})
    .then(res => dispatch({type: REQUEST_COUNTRY_SUCCESS, payload: res.data[0]}))
    .catch(error => dispatch({type: REQUEST_COUNTRY_FAIL, payload: error}));
}

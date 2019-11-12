import { 
    CHANGE_SEARCH_FIELD, 
    SELECT_REGION,
    REQUEST_COUNTRIES_PENDING,
    REQUEST_COUNTRIES_SUCCESS,
    REQUEST_COUNTRIES_FAIL,
    SELECT_COUNTRY
} from '../constants/index';

const initialState = {
    searchField : '',
    filteredRegion : '',
    isPending: false,
    countries: [],
    selectedCountry:{},
    error: ''
}

export const setCountry = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({},state, {searchField: action.payload});
        default: 
            return state;
    }
}

export const setRegion = (state=initialState, action={}) => {
    switch(action.type) {
        case SELECT_REGION:
            return Object.assign({}, state, {filteredRegion: action.payload});
        default:
            return state;
    }
}


export const requestCountries = (state=initialState, action={}) => {
    switch(action.type) {
        case REQUEST_COUNTRIES_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_COUNTRIES_SUCCESS:
            return Object.assign({}, state, {countries : action.payload, isPending: false});
        case REQUEST_COUNTRIES_FAIL:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default:
            return state;
    }
}

export const selectCountry = (state=initialState, action={}) => {
    switch(action.type) {
        case SELECT_COUNTRY:
            return Object.assign({}, state, { selectedCountry : action.payload});
        default:
            return state;
    }
}
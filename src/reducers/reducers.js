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
    REQUEST_COUNTRY_FAIL
} from '../constants/index';

const initialState = {
    searchField : '',
}

export const setCountry = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({},state, {searchField: action.payload});
        default: 
            return state;
    }
}

const initialStateRegion = {
    filteredRegion : '',
}

export const setRegion = (state=initialStateRegion, action={}) => {
    switch(action.type) {
        case SELECT_REGION:
            return Object.assign({}, state, {filteredRegion: action.payload});
        default:
            return state;
    }
}

const initialStateRequests = {
    isPending: false,
    countries: [],
    error: '',

}

export const requestCountries = (state=initialStateRequests, action={}) => {
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



export const initialStateTheme = {
    isDark: false
}

export const changeTheme = (state=initialStateTheme, action={}) => {
    switch(action.type) {
        case CHANGE_THEME:
            if(state.isDark === false) {
                return Object.assign({}, state, {isDark:true});
            }
            else {
                return Object.assign({}, state, {isDark: false});
            }
        default:
            return state;
    }
}

export const initialStateSelect = {
    selectedCountry: {},
    isLoading: false,
    selectedError: '',
}


export const selectCountry = (state=initialStateSelect, action={}) => {
    switch(action.type) {
        
        default:
            return state;
    }
}

export const requestCountry = (state=initialStateSelect, action={}) => {
    switch(action.type){
        case SELECT_COUNTRY:
            return Object.assign({}, state, {selectedCountry : action.payload});
        case REQUEST_COUNTRY_PENDING:
            return Object.assign({}, state, {isLoading: true});
        case REQUEST_COUNTRY_SUCCESS:
            return Object.assign({}, state, {selectedCountry: action.payload, isLoading: false});
        case REQUEST_COUNTRY_FAIL:
            return Object.assign({}, state, {selectedError: action.payload, isLoading:false});
        default:
            return state;        
    }
}
import { CHANGE_SEARCH_FIELD, SELECT_REGION } from '../constants/constants';

const initialState = {
    searchField : '',
    filteredRegion : ''
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
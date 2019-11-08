import { CHANGE_SEARCH_FIELD } from '../constants/constants';

const initialState = {
    searchField : ''
}

export const setCountry = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload};
        default: 
            return state;
    }
}
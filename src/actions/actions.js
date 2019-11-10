import { CHANGE_SEARCH_FIELD, SELECT_REGION } from '../constants/constants';

export const  setSearchField = (text) =>({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const setFilteredRegion = (text) => ({
    type: SELECT_REGION,
    payload: text
});
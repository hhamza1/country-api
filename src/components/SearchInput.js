import React from 'react';
import './styles/SearchInput.css';


const SearchInput = () => {
    return (
        <div className="input-group">
            <input 
            className="search-input" 
            type="text" 
            name="countrySearch" 
            placeholder="Search for a country">
            </input>
            <span className="lnr lnr-magnifier"></span>
        </div>
    );
}

export default SearchInput;
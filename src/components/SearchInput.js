import React from 'react';
import './styles/SearchInput.css';


const SearchInput = ({searchCountry, darkMod}) => {
    return (
        <div className="input-group">
            <input
            aria-label="Search for country"
            className={darkMod === false ? "search-input" : "search-input search-input__dark"}
            type="text" 
            name="countrySearch" 
            placeholder="Search for a country"
            onChange={searchCountry}
            >
            </input>
            <span className="lnr lnr-magnifier"></span>
        </div>
    );
}

export default SearchInput;
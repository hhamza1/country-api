import React from 'react';
import './style/CountryDetails.css';


const CountryDetails = ({selectedCountry}) => {
    return(
        <div className="selected-country-details">
            <button>
                Back
            </button>
            <div className="selected-country">
                <div className="selected-country-flag">
                    <img src={selectedCountry.flag} alt={selectedCountry.name}/>
                </div>
                <div className="selected-details">
                    <h1>{selectedCountry.name}</h1>
                </div>
            </div>
        </div>
    );
}

export default CountryDetails;
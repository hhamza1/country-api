import React from 'react';


const CountryDetails = ({selectedCountry}) => {
    return(
        <h1>
            {selectedCountry.name}
        </h1>
    );
}

export default CountryDetails;
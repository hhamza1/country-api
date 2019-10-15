import React from 'react';
import './styles/Country.css';



const Country = ({name, flag, capital, population, region, darkMod}) => {
    return (
        <div className={darkMod === false ? "country" : "country darkCountry"}>
            <div className="country_flag">
                <img src={flag} alt={name} />
            </div>
            <div className="country_info">
                <ul>
                    <li className="country_name">{name}</li>
                    <li className="country_details">Population: {population}</li>
                    <li className="country_details">Region: {region}</li>
                    <li className="country_details">Capital: {capital}</li>
                </ul>
            </div>
        </div>
    );
}

export default Country;

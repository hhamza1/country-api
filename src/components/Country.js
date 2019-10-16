import React from 'react';
import './styles/Country.css';



const Country = (props) => {
    return (
        <div className={props.darkMod === false ? "country" : "country darkCountry"} onClick={() => props.selectedCountry(props.country)}>
            <div className="country_flag">
                <img src={props.flag} alt={props.name} />
            </div>
            <div className="country_info">
                <ul>
                    <li className="country_name">{props.name}</li>
                    <li className="country_details">Population: {props.population}</li>
                    <li className="country_details">Region: {props.region}</li>
                    <li className="country_details">Capital: {props.capital}</li>
                </ul>
            </div>
        </div>
    );
}

export default Country;

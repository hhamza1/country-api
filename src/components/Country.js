import React from 'react';
import './styles/Country.css';



const Country = ({name}) => {
    return (
        <div className="country">
            <div className="country_flag">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png" alt="Germany" />
            </div>
            <div className="country_info">
                <ul>
                    <li className="country_name">{name}</li>
                    <li className="country_details">Population: </li>
                    <li className="country_details">Region: </li>
                    <li className="country_details">Capital: </li>
                </ul>
            </div>
        </div>
    );
}

export default Country;

import React from 'react';
import './styles/Country.css';



const Country = () => {
    return (
        <div className="country">
            <div className="country_flag">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png" alt="Germany" />
            </div>
            <div className="country_info">
                <ul>
                    <li>Germany</li>
                    <li>Population: </li>
                    <li>Region: </li>
                    <li>Capital: </li>
                </ul>
            </div>
        </div>
    );
}

export default Country;

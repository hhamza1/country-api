import React from 'react';
import {Link} from 'react-router-dom';
import './style/CountryDetails.css';


const CountryDetails = ({isDark, selectedCountry}) => {
        return(
            <div className="selected-country-details">
                <Link className={isDark === false ? "back-button" : "back-button dark-mod"} to={`/`}>
                <span className="lnr lnr-arrow-left"></span>
                    Back
                </Link>
                <div className="selected-country">
                    <div className="selected-country-flag">
                        <img src={selectedCountry.flag} alt={selectedCountry.name}/>
                    </div>
                    <div className="selected-details">
                        <h1>{selectedCountry.name}</h1>
                        <ul>
                            <li><strong>Native Name: </strong>{selectedCountry.nativeName}</li>
                            <li><strong>Population: </strong>{selectedCountry.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</li>
                            <li><strong>Region: </strong>{selectedCountry.region}</li>
                            <li><strong>Sub Region: </strong>{selectedCountry.subregion}</li>
                            <li><strong>Capital: </strong>{selectedCountry.capital}</li>
                        </ul>
                        <ul className="second-details">
                            <li><strong>Top Level Domain: </strong>{selectedCountry.topLevelDomain}</li>
                            <li><strong>Currencies: </strong>{selectedCountry.currencies.map(currency => {
                                return `${currency.name}`;
                            })}
                            </li>
                            <li><strong>Languages: </strong>{
                                    selectedCountry.languages.map(language => {
                                        return `${language.name}, `;
                                        }
                                    )
                                }
                            </li>
                        </ul>
                        
                        <ul className="border-country">
                        <strong>Border Countries :&nbsp; </strong>
                            {selectedCountry.borders.map((border, key) => {
                                return <li key={key} className={isDark === true ? "dark-mod" : ""} >{border}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

export default CountryDetails;
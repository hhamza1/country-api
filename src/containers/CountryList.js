import React from 'react';
import {Link} from 'react-router-dom';
import Country from '../components/Country';
import './style/CountryList.css';



const CountryList = ({countries, darkMod, selectedCountry}) => {
    return(
            <div className="country-list">
                
                {
                    countries.map((country, key) => {
                        return(
                                <Link key={key} style={{ textDecoration: 'none' }}  to={`/${country.alpha2Code}`}>
                                    <Country
                                        country={country}
                                        name={country.name} 
                                        flag={country.flag}
                                        capital={country.capital}
                                        population={country.population}
                                        region={country.region}
                                        darkMod={darkMod}
                                        selectedCountry={selectedCountry}
                                    />
                                </Link>
                        );
                    })
                    
                }
                    
                
            </div>

             
    );
}

export default CountryList;
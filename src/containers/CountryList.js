import React from 'react';
import Country from '../components/Country';
import './style/CountryList.css';



const CountryList = ({countries, darkMod}) => {

    return(
        <div className="country-list">
            {   
                countries.map((country, key) => {
                    return(
                        <Country 
                            key={key} 
                            name={country.name} 
                            flag={country.flag}
                            capital={country.capital}
                            population={country.population}
                            region={country.region}
                            darkMod={darkMod}
                        />
                    )
                })
            }
        </div>
    );
}

export default CountryList;
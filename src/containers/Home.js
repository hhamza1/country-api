import React from 'react';
import SearchInput from '../components/SearchInput';
import Pagination from '../components/Pagination';
import CountryList from '../containers/CountryList';
import Filter from '../components/Filter';


const Home = (props) => {
    return (
        <div>
            <div className="search-filters">
                <SearchInput darkMod={props.isDark} searchCountry={props.searchCountry}/>
                <Filter darkMod={props.isDark} currentRegion={props.filteredRegion} selectRegion={props.searchRegion}/>
            </div>
            <CountryList darkMod={props.isDark} countries={props.getCurrentCountries} selectedCountry={props.clickCountry}/>
            <Pagination countryPerPage={props.countryPerPage} totalCountries={props.countries.length} paginate={props.paginate}/>
        </div>
    )
}


export default Home;
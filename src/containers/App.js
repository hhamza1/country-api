import React, {Component} from 'react';
import * as axios from 'axios';
import Header from './Header';
import SearchInput from '../components/SearchInput';
import Pagination from '../components/Pagination';
import CountryList from '../containers/CountryList';
import Filter from '../components/Filter';
import './style/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      isLoaded: false,
      isDark: false,
      hidePagination: false,
      currentPage: 1,
      countryPerPage: 24,
      selectedCountry: '',
      searchField:'',
      filteredRegion: ''
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://restcountries.eu/rest/v2/all'
    })
      .then(res => {
          this.setState({countries : res.data, isLoaded:true});
    });
  }


  setCurrentPage = (number) => {
    this.setState({currentPage:number});
  };

  setCountry = (e) => {
    this.setState({searchField: e.target.value});
  };

  filterRegion = (e) => {
    this.setState({filteredRegion: e.target.id});
  };

  




  render() {
    const {countries, isLoaded, currentPage, countryPerPage, searchField, filteredRegion, isDark} = this.state;
    const indexOfLastCountry = currentPage * countryPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage;
    const getCurrentCountry = countries.filter(
      country =>{
                   
            return country.name.toLowerCase().includes(searchField.toLowerCase()) && country.region.toLowerCase().includes(filteredRegion.toLowerCase());;
      }
    );

    const getCurrentCountries = getCurrentCountry.slice(indexOfFirstCountry, indexOfLastCountry);


    
    const paginate = (pageNumber) => this.setCurrentPage(pageNumber);
    const searchCountry = (e) => this.setCountry(e);
    const searchRegion = (e) => this.filterRegion(e);

    const setToDarkMod = () => {
      if(isDark === false){
        this.setState({isDark : true});
      }
      else {
        this.setState({isDark : false});
      }
    };


    return (
      <div className={isDark === false ? 'App' : 'darkMod'}>
        <Header darkMod={isDark} setToDarkMod={setToDarkMod}/>
        <div className="search-filters">
          <SearchInput darkMod={isDark} searchCountry={searchCountry}/>
          <Filter darkMod={isDark} currentRegion={filteredRegion} selectRegion={searchRegion}/>
        </div>
        {
          !isLoaded ? <h1>Loading ...</h1> : <CountryList darkMod={isDark} countries={getCurrentCountries}/> 
        }
        <Pagination countryPerPage={countryPerPage} totalCountries={countries.length} paginate={paginate}/>           
      </div>
    );
  }
}

export default App;

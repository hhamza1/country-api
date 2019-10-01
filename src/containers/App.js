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
      currentPage: 1,
      countryPerPage: 12,
      selecteCountry: ''
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




  render() {
    const {countries, isLoaded, currentPage, countryPerPage } = this.state;
    const indexOfLastCountry = currentPage * countryPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage;
    const getCurrentCountry = countries.slice(indexOfFirstCountry, indexOfLastCountry);
    const paginate = (pageNumber) => this.setCurrentPage(pageNumber);
    return (
      <div className="App">
        <Header />
        <SearchInput />
        <Filter />
        {
          !isLoaded ? <h1>Loading ...</h1> : <CountryList countries={getCurrentCountry} />
        }
        <Pagination countryPerPage={countryPerPage} totalCountries={countries.length} paginate={paginate}/>
      </div>
    );
  }
}

export default App;

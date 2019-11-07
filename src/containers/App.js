import React, {Component} from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import * as axios from 'axios';
import Header from './Header';
import Home from './Home';
import './style/App.css';
import CountryDetails from './CountryDetails';

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
      selectedCountry: {},
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

    if(!this.props.selectedCountry){
      let country = window.location.href.split("/")[3];
      console.log(country);
      axios({
          method: 'get',
          url: `https://restcountries.eu/rest/v2/name/${country}`
      }).then( res => {
          console.log(res.data[0]);
          this.setState({selectedCountry : res.data[0]});
      });
}
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

  selectCountry = (e) => {
    this.setState({selectedCountry: e});
  };
  




  render() {
    const {countries, currentPage, countryPerPage, searchField, filteredRegion, isDark, selectedCountry} = this.state;
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
    const clickCountry = (e) => this.selectCountry(e);

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
        <Router>
          <Switch>
            <Route exact path="/">
                <Home
                  isDark={isDark}
                  filteredRegion={filteredRegion}
                  countryPerPage={countryPerPage}
                  getCurrentCountries={getCurrentCountries} 
                  paginate={paginate}
                  countries={countries}
                  searchCountry={searchCountry} 
                  searchRegion={searchRegion} 
                  clickCountry={clickCountry}
                  sear
                  />
            </Route>
            <Route exact path={`/${selectedCountry.name}`}>
                <CountryDetails isDark={isDark} selectedCountry={selectedCountry} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

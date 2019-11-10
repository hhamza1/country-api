import React, {Component} from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Header from './Header';
import Home from './Home';
import './style/App.css';
import CountryDetails from './CountryDetails';
import {
  setSearchField,
  setFilteredRegion
} from '../actions/actions';

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
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://restcountries.eu/rest/v2/all'
    })
      .then(res => {
          this.setState({countries : res.data, isLoaded:true});
          if(!this.props.selectedCountry){
          let country = window.location.href.split("/")[3];
          axios({
              method: 'get',
              url: `https://restcountries.eu/rest/v2/name/${country}`
          }).then( res => {
              this.setState({selectedCountry : res.data[0]});
          });
    }
    });      
  }


  setCurrentPage = (number) => {
    this.setState({currentPage:number});
  };

  selectCountry = (e) => {
    this.setState({selectedCountry: e});
  };
  
  render() {
    const {countries, currentPage, countryPerPage, isDark, selectedCountry} = this.state;
    const {searchField, setCountry, filteredRegion, filterRegion} = this.props;


    const indexOfLastCountry = currentPage * countryPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage;

    const getCurrentCountry = countries.filter(
      country =>{
                   
            return country.name.toLowerCase().includes(searchField.toLowerCase()) && country.region.toLowerCase().includes(filteredRegion.toLowerCase());;
      }
    );

    const getCurrentCountries = getCurrentCountry.slice(indexOfFirstCountry, indexOfLastCountry);


    
    const paginate = (pageNumber) => this.setCurrentPage(pageNumber);
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
                  searchCountry={setCountry} 
                  searchRegion={filterRegion} 
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

const mapStateToProps = state => {
  return {
    searchField : state.setCountry.searchField,
    filteredRegion: state.setRegion.filteredRegion
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCountry : event => dispatch(setSearchField(event.target.value)),
    filterRegion : event => dispatch(setFilteredRegion(event.target.id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

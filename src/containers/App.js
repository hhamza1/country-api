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
  setFilteredRegion,
  requestCountries,
  selectCountry,
  changeTheme
} from '../actions/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePagination: false,
      currentPage: 1,
      countryPerPage: 24,
    };
  }

  componentDidMount() {
    this.props.onRequestCountries();
    if(!this.props.selectedCountry){
      let country = window.location.href.split("/")[3];
      axios({
          method: 'get',
          url: `https://restcountries.eu/rest/v2/name/${country}`
      }).then( res => {
          this.setState({selectedCountry : res.data[0]});
      }); 
    }
  }     
  
  setCurrentPage = (number) => {
    this.setState({currentPage:number});
  };
  
  render(){
    
    const {currentPage, countryPerPage} = this.state;
    const {searchField, setCountry, filteredRegion, filterRegion, countries, selectedCountry, onSelectCountry, isDark, onChangeTheme} = this.props;

    const indexOfLastCountry = currentPage * countryPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage;

    
    const paginate = (pageNumber) => this.setCurrentPage(pageNumber);
    const getCurrentCountry = countries.filter(
      country =>{ 
            return country.name.toLowerCase().includes(searchField.toLowerCase()) && country.region.toLowerCase().includes(filteredRegion.toLowerCase());;
      }
    );

    const getCurrentCountries = getCurrentCountry.slice(indexOfFirstCountry, indexOfLastCountry);

    return (
      <div className={isDark === false ? 'App' : 'darkMod'}>
        <Header darkMod={isDark} setToDarkMod={onChangeTheme}/>
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
                  clickCountry={onSelectCountry}
                  />
            </Route>
            <Route exact path={`/${selectedCountry.alpha3Code}`}>
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
    filteredRegion: state.setRegion.filteredRegion,
    countries: state.requestCountries.countries,
    isPending: state.requestCountries.isPending,
    error: state.requestCountries.error,
    selectedCountry: state.selectCountry.selectedCountry,
    isDark: state.changeTheme.isDark
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCountry : event => dispatch(setSearchField(event.target.value)),
    filterRegion : event => dispatch(setFilteredRegion(event.target.id)),
    onRequestCountries: () => dispatch(requestCountries()),
    onSelectCountry: event => dispatch(selectCountry(event)),
    onChangeTheme: () => dispatch(changeTheme())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

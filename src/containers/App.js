import React, {Component} from 'react';
import * as axios from 'axios';
import Header from './Header';
import SearchInput from '../components/SearchInput';
import CountryList from '../containers/CountryList';
import Filter from '../components/Filter';
import './style/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      isLoaded: false,
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




  render() {
    const {countries, isLoaded} = this.state;
    return (
      <div className="App">
        <Header />
        <SearchInput />
        <Filter />
        {
          !isLoaded ? <h1>Loading ...</h1> : <CountryList countries={countries} />
        }
      </div>
    );
  }
}

export default App;

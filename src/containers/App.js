import React, {Component} from 'react';
import Header from './Header';
import SearchInput from '../components/SearchInput';
import CountryList from '../containers/CountryList';
import Filter from '../components/Filter';
import './style/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: ['Germany','Morocco','Turkey','Japan'],
      selecteCountry: ''
    };
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({countries : result})
        });
  }



  render() {
    const {countries} = this.state;
    return (
      <div className="App">
        <Header />
        <SearchInput />
        <Filter />
        <CountryList countries={countries} />
      </div>
    );
  }
}

export default App;

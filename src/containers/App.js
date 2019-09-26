import React from 'react';
import Header from './Header';
import SearchInput from '../components/SearchInput';
import Filter from '../components/Filter';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchInput />
      <Filter />
    </div>
  );
}

export default App;

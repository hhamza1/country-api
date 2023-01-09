import React, {Component} from 'react';
import './style/App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePagination: false,
      currentPage: 1,
      countryPerPage: 24,
    };
  }


  
  render(){

    return (
      <div>Hello World</div>
    );
  }
}


export default (App);

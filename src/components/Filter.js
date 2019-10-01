import React, {Component} from 'react';
import './styles/Filter.css';


class Filter extends Component {
    constructor() {
        super();
        this.state = {
            dropdownElement : "Filter by Region"
        };
    }

    render() {
        const {dropdownElement} = this.state;
        const selectFilter = (event) => {
            this.setState({dropdownElement : event.target.id});
        }

        return (
            <div className="filter dropdown">
                <div className="dropdown" tabIndex="0">{dropdownElement}</div>
                <div tabIndex="-1" className="downarrow"></div>
                <div>
                    <ul>
                        <li id="Africa" className="filter-child" onClick={selectFilter} >Africa</li>
                        <li id="America" className="filter-child" onClick={selectFilter} >America</li>
                        <li id="Asia" className="filter-child" onClick={selectFilter} >Asia</li>
                        <li id="Europe" className="filter-child" onClick={selectFilter} >Europe</li>
                        <li id="Oceania" className="filter-child" onClick={selectFilter} >Oceania</li>
                    </ul>
                </div>
        </div>);
    }
}

export default Filter;
import React from 'react';
import './styles/Filter.css';


const Filter = () => {
    return (
            <div className="filter dropdown dropdown">
                <div tabIndex="0">Filter by Region</div>
                <div tabIndex="-1" className="downarrow"></div>
                <div>
                    <ul>
                        <li className="filter-child">Africa</li>
                        <li className="filter-child">America</li>
                        <li className="filter-child">Asia</li>
                        <li className="filter-child">Europe</li>
                        <li className="filter-child">Oceania</li>
                    </ul>
                </div>
            </div>
    );
}


export default Filter;
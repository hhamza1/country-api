import React from 'react';
import './styles/Filter.css';


const Filter = ({selectRegion, currentRegion, darkMod}) => {
        return (
            <div className={darkMod===false ? "filter dropdown" : "filter dropdown darkFilter"} >
                <div className="dropdown" tabIndex="0">{currentRegion===''? "Filter by Region": currentRegion}</div>
                <div tabIndex="-1" className="downarrow"></div>
                <div className="listRegions">
                    <ul>
                        <li className="filter-child" onClick={selectRegion} >All Regions</li>                        
                        <li id="Africa" className="filter-child" onClick={selectRegion} >Africa</li>
                        <li id="America" className="filter-child" onClick={selectRegion} >America</li>
                        <li id="Asia" className="filter-child" onClick={selectRegion} >Asia</li>
                        <li id="Europe" className="filter-child" onClick={selectRegion} >Europe</li>
                        <li id="Oceania" className="filter-child" onClick={selectRegion} >Oceania</li>
                    </ul>
                </div>
        </div>);
    }


export default Filter;
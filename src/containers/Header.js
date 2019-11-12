import React from 'react';
import SwitchButton from '../components/SwitchButton';
import './style/Header.css';


const Header = ({darkMod, setToDarkMod}) => {
    return (
        <div className={darkMod === false ? 'header' : 'darkHeader'}>
        <a href="/" >
            <h2 className="heading">Where in the world?</h2>
        </a>
            <SwitchButton switchMod={setToDarkMod}/>
        </div>
    );
}

export default Header;
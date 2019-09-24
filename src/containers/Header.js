import React from 'react';
import SwitchButton from '../components/SwitchButton';
import './style/Header.css';


const Header = () => {
    return (
        <div className="header">
            <h2 className="heading">Where in the world?</h2>
            <SwitchButton/>
        </div>
    );
}

export default Header;
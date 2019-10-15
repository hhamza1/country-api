import React from 'react';
import 'linearicons';
import './styles/SwitchButton.css';


const SwitchButton = ({switchMod}) => {
    return (
            <a className="color-switch" href="#!" onClick={switchMod}> 
                <span className="lnr lnr-moon"></span>
                Dark Mode
            </a>
    )
}

export default SwitchButton;
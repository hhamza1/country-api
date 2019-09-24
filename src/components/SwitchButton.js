import React from 'react';
import 'linearicons';
import './styles/SwitchButton.css';


const SwitchButton = () => {
    return (
            <a className="color-switch" href="#!">
                <span className="lnr lnr-moon"></span>
                Dark Mode
            </a>
    )
}

export default SwitchButton;
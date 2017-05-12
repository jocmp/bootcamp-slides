import * as React from 'react';
import '../stylesheets/App.css'

const logo = require('../assets/logo.jpg')

const Header = () => {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}

export default Header;
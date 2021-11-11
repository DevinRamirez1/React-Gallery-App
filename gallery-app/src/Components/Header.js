import React from 'react';
import { NavLink } from 'react-router-dom';

//creates the navlinks for the header component
const Header = () => (
    <header>
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/rivers">Rivers</NavLink></li>
                <li><NavLink to="/mountains">Mountains</NavLink></li>
                <li><NavLink to="/dogs">Dogs</NavLink></li>
            </ul>
        </nav>
    </header>
);

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <ul className='main-nav'>
        <ul><NavLink to="/rivers">Rivers</NavLink></ul>
        <ul><NavLink to="/mountains">Mountains</NavLink></ul>
        <ul><NavLink to="/dogs">Dogs</NavLink></ul>
        </ul>
    </header>
);

export default Header;
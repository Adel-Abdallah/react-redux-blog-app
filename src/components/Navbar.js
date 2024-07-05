// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Posts</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="text-lg font-semibold hidden md:block">                    
            <NavLink className="px-4" to="/home">Home</NavLink>
            <NavLink className="px-4" to="/about">About</NavLink>
            <NavLink className="px-4" to="/courses">Courses</NavLink>
            <NavLink className="px-4" to="/Services">Services</NavLink>
            <NavLink className="px-4" to="/contact">Contact</NavLink> 
        </nav>
    );
};

export default Navbar;
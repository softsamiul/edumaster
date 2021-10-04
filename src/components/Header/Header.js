import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    const element = <FontAwesomeIcon style={{marginRight:'15px'}} icon={faUserGraduate} />
    return (
        <header className="bg-blue-800 py-4 text-white">
            <div className="w-4/5 mx-auto flex justify-between items-center">
                <div className="brand">
                <NavLink className="text-4xl font-bold" to="/home">{element}EDUMASTER</NavLink>
                </div>
                {/* <nav className="text-lg font-semibold">                    
                    <NavLink className="px-4" to="/home">Home</NavLink>
                    <NavLink className="px-4" to="/about">About</NavLink>
                    <NavLink className="px-4" to="/courses">Courses</NavLink>
                    <NavLink className="px-4" to="/Services">Services</NavLink>
                    <NavLink className="px-4" to="/contact">Contact</NavLink> 
                </nav> */}
                <Navbar></Navbar>
            </div>
        </header>
    );
};

export default Header;
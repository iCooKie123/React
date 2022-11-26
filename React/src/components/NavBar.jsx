import React from "react";
import "../styles/navbar.css";
import { useRef } from "react";
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom';
//create a navbar with 3 links


function NavBar(){
    const navRef=useRef();

    const toggleNav=()=>{
        navRef.current.classList.toggle('responsive-nav');
    }
    return( <>
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <Link to="/">Home</Link>
                <Link to="/about-me">About me</Link>
                <Link to="/education">Education</Link>
                <Link to="/experience">Experience</Link>
                <button className="nav-btn nav-close-btn" onClick={toggleNav}>
                    <FaTimes/>

                </button>
            </nav>
            <div className="line"></div>
            <button className="nav-btn" onClick={toggleNav}>
                <FaBars/>
            </button>
        </header>
        <div className="line"></div>
    </>
    );
}

export default NavBar;
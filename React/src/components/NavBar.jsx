import React from "react";
import "../styles/navbar.css";
import { useRef } from "react";
import {FaBars,FaTimes} from 'react-icons/fa'
//create a navbar with 3 links


function NavBar(){
    const navRef=useRef();

    const toggleNav=()=>{
        navRef.current.classList.toggle('responsive-nav');
    }
    return( 
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="/">Home</a>
                <a href="/#">About me</a>
                <a href="/#">Experience</a>
                <a href="/#">Education</a>
                <button className="nav-btn nav-close-btn" onClick={toggleNav}>
                    <FaTimes/>

                </button>
            </nav>
            <button className="nav-btn" onClick={toggleNav}>
                <FaBars/>
            </button>
        </header>
    );
}

export default NavBar;
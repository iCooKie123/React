import React from "react";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import GradientLine from "../components/gradient-line.jsx";

import "../styles/page-not-found.css";
import {FaSchool} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'

function PageNotFound() {

  return (
    
    <>
    
      <NavBar />
      <div className="grid-container">
        <div className="grid-1-1">
          <GradientLine/>
        </div>
        
        <div className="grid-1-2">
          <FaGraduationCap className="graduation-icon"/>
        </div>
        
        <div className="grid-1-3">
          <GradientLine/>
        </div>

        <div className="grid-2-1"></div>

        <div className="grid-2-2">
          <div className="parag1">
            <h1 className="page-not-found__title">404</h1>
            <h2 className="page-not-found__subtitle">Page Not Found</h2>

          </div>
        </div>

        

        <div className="grid-1-5">
          <FaSchool className="school-icon"/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default PageNotFound;

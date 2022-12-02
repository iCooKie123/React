import React from "react";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import GradientLine from "../components/gradient-line.jsx";

import "../styles/education.css";
import {FaSchool} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'

function Education() {
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
          <h1 className="page-not-found__title">"C.A. Rosetti Highschool"</h1>
          <h3>2016-2020</h3>
          <h2 className="page-not-found__subtitle">Mathematics and Computer sciences</h2>

        </div>
      </div>

      

      <div className="grid-1-3">
        <FaSchool className="school-icon"/>
      </div>
    </div>
    <Footer/>
  </>

  );
}

export default Education;
import React from "react";
import '../styles/gradient-line.css'
import {FaSchool} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'

export default function GradientLine() {
    return (
        <div className="gradient-line">
            <div className="gradient-line__container">
                <FaSchool className="school-icon"/>
                <FaGraduationCap className="graduation-icon"/>
            </div>
        </div>
    );
    }
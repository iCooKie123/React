import React from "react";
import "../styles/footer.css";
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
function Footer(){
    return(
        <footer>
            <div className="ft-right">
                <ul className="list-right">
                    <li>Contact</li>
                    <div className="contact-flex">
                        <AiOutlineMail/>
                        <a href="mailto:aconstantin86@yahoo.com">E-mail</a>
                    </div>
                    <div className="contact-flex">
                        <BsLinkedin/>
                        <a href="/#">Linkedin</a>
                    </div>
                    <div className="contact-flex">
                        <BsGithub/>
                        <a href="https://github.com/iCooKie123">Github</a>
                    </div>
                </ul>
            </div>
            <div className="ft-left">
                <ul className="list-left">
                    <a href="/#">Te iubesc mult</a>
                    <a href="/#">Te iubesc mult</a>
                    <a href="/#">Te iubesc mult</a>
                </ul>
            </div>

        </footer>
        
    );
}

export default Footer;
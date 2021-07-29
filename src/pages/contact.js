import React from 'react';
import Header from '../Components/Header';
import { siteMetadata } from "../../gatsby-config";
import '../styles/contact.css';


function contact() {
    return (
        <div style={{margin:"20px"}}>
            <Header menuLinks={siteMetadata.menuLinks}/>
            <div className="contact__content">
                <h1 className="contact__title">Contact Me</h1>
                <a className="contact__link" href="mailto:raisha.asuma@gmail.com">
                    <span>Email</span>
                </a>
                <a className="contact__link" href="https://www.linkedin.com/in/raisha-asuma-85181aa8/" target="_blank" rel="noreferrer">
                    <span>LinkedIn</span>
                </a>
                <a className="contact__link" href="https://github.com/raishaasuma" target="_blank" rel="noreferrer">
                    <span>GitHub</span>
                </a>
        </div>
        </div>
    )
}

export default contact

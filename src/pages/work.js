import React from 'react';
import Header from '../Components/Header';
import { siteMetadata } from "../../gatsby-config";
import Projects from '../Components/Projects';
import Tools from '../Components/Tools';
// import Experience from '../Components/Experience';
import '../styles/work.css';
import ClientProjects from '../Components/ClientProjects';

function work() {
    return (
        <div style={{margin:"20px"}}>
            <Header menuLinks={siteMetadata.menuLinks}/>
            <h1 className="section__title">Featured Projects</h1>
            <Projects />
            <h1 className="section__title">Professional Work</h1>
            <ClientProjects />
            <h1 className="section__title">Technical Expertise</h1>
            {/* <h1 className="section__title">Experience</h1> */}
            {/* <Experience /> */}
            <Tools />
        </div>
    )
}

export default work

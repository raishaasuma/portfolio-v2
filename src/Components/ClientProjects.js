import React from 'react';
import '../styles/Projects.css';
import bciImage from '../images/bci-project-img.png'


const ClientProjectsList = [
    {
        "name": "Baja Coastal Institute",
        "description" : "I built the website for the Baja Coastal Institute, a non-profit dedicated to preserving the reef of Baja California Sur. The website was a key component to sharing information with donors and shareholders.",
        "tools" : ["Squarespace", "Javascript", "CSS"],
        "demoURL" : "https://www.bcibaja.org/",
        // "githubURL": "https://github.com/raishaasuma/netflix-clone",
        "imageURL": bciImage,
        // "overlayColor": "rgba(116, 5, 5, 0.767)",
        "overlayColor": "#306f86c9",
    },
]

function ClientProjects() {
    return (
        <div className="projects">
            {ClientProjectsList.map(project =>(
                <div className="project" style={{backgroundImage: `url(${project.imageURL})`}} key={project.name}>
                    <div style={{backgroundColor:`${project.overlayColor}`, "border-radius": "15px"}} className="project__overlay">
                    <div className="project__content">
                    <div className="project__tools">
                        {(project.tools).map((tool) => (
                            <span key={tool} className="project__tool">{tool}</span> 
                        ))}
                    </div>
                        <h2 className="project__title">{project.name}</h2>

                        <p className="project__description">{project.description}</p>
                        <div className="project__buttons">
                            <a className="project__button" href={project.demoURL} target="_blank" rel="noreferrer">Live Demo<span></span></a>
                            {/* <a className="project__button" href={project.githubURL} target="_blank" rel="noreferrer">View on Github<span></span></a> */}
                        </div>
                    </div>
                    </div>
    
                </div>
            ))}
        </div>

    )
}

export default ClientProjects
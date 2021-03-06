import React from 'react';
import '../styles/Projects.css';
import netflixImage from '../images/netflix-project-img.png';
import toDoImage from '../images/to-do-project-img.png';
import portfolioV1Image from '../images/portfolio-v1-img.png';


const projectsList = [
    {
        "name": "Netflix Clone",
        "description" : "A Netflix look-alike web app that sorts movies by genre. View a preview for each movie by clicking on the movie poster. Built with React and data from The Movie Database and Movie Trailers database.",
        "tools" : ["React", "TMDB api"],
        "demoURL" : "https://netflix-clone-68522.web.app/",
        "githubURL": "https://github.com/raishaasuma/netflix-clone",
        "imageURL": netflixImage,
        // "overlayColor": "rgba(116, 5, 5, 0.767)",
        "overlayColor": "#306f86c9",

    },
    {
        "name": "To Do List",
        "description" : "A simple to do list built with React. View, edit, add, and delete notes. Notes are arranged by date added and stored in Firebase.",
        "tools" : ["React", "Firebase"],
        "demoURL" : "https://todo-app-571d5.web.app/",
        "githubURL": "https://github.com/raishaasuma/todo-app-react",
        "imageURL": toDoImage,
        // "overlayColor": "rgba(17, 68, 83, 0.767)",
        "overlayColor": "#306f86c9",
    },
    {
        "name": "Portfolio v1",
        "description" : "The first iteration of my website, written in pure HTML and CSS.",
        "tools" : ["HTML", "CSS"],
        "demoURL" : "https://jovial-swirles-fbd0f3.netlify.app/",
        "githubURL": "https://github.com/raishaasuma/portfolio-website",
        "imageURL": portfolioV1Image,
        // "overlayColor": "rgba(99, 9, 107, 0.651)",
        "overlayColor": "#306f86c9",

    },
]

function Projects() {
    return (
        <div className="projects">
            {projectsList.map(project =>(
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
                            <a className="project__button" href={project.githubURL} target="_blank" rel="noreferrer">View on Github<span></span></a>
                        </div>
                    </div>
                    </div>
    
                </div>
            ))}
        </div>

    )
}

export default Projects

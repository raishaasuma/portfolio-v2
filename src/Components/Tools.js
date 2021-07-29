import React from 'react';
// COLORED LOGOS
import htmlColorLogo from '../images/html-color-logo.png';
import cssColorLogo from '../images/css-color-logo.png';
import jsColorLogo from '../images/js-color-logo.png';
import reactColorLogo from '../images/react-color-logo.png';
import sassColorLogo from '../images/sass-color-logo.png';
import vsColorLogo from '../images/vs-color-logo.png';
import nodeColorLogo from '../images/node-color-logo.png';
import firebaseColorLogo from '../images/firebase-color-logo.png';
import githubColorLogo from '../images/github-color-logo.png';
import jqueryColorLogo from '../images/jquery-color-logo.png';
import '../styles/Tools.css';

const tools = [
    {
        "name": "HTML",
        "image": htmlColorLogo,
    },
    {
        "name": "CSS",
        "image": cssColorLogo,
    },
    {
        "name": "JavaScript",
        "image": jsColorLogo,
    },
    {
        "name": "GitHub",
        "image": jqueryColorLogo,
    },
    {
        "name": "React",
        "image": reactColorLogo,
    },
    {
        "name": "Sass",
        "image": sassColorLogo,
    },
    {
        "name": "Visual Studio",
        "image": vsColorLogo,
    },
    {
        "name": "Node.js",
        "image": nodeColorLogo,
    },
    {
        "name": "Firebase",
        "image": firebaseColorLogo,
    },
    {
        "name": "GitHub",
        "image": githubColorLogo,
    },
]

function Tools() {
    return (
        <div className="tools">
            {tools.map(tool => (
                    <img className="tool" src={tool.image} alt={tool.name} />
            ))}
        </div>
    )
}

export default Tools

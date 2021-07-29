import React from 'react';
import { siteMetadata } from "../../gatsby-config";
import Header from '../Components/Header';
import meImage from '../images/me-image.jpg';
import '../styles/about.css';


function about() {
    return (
        <div style={{margin:"20px"}}>
            <Header menuLinks={siteMetadata.menuLinks}/>
            <section className="about">
                <div className="about__image__container">
                <img class="about__image" src={meImage} alt="" />
                </div>
                <div className="about__content">
                    <h1 className="about__title">Hello there!</h1>
                    <p className="about__text main">I'm Raisha Asuma, a front-end web developer currently based in Southern California.
                    <br /> <br />
                        I wrote my first piece of <span className="about__code" href="">code</span> <div className="about__code__show">Hello World!</div> when I was 15 years old, and I've loved it ever since! I recently graduated from the University of
                        British Columbia with a BA in Mathematics and a Minor in Psychology.
                        <br /><br />
                        My focus is on applying my skills to make a positive difference in the world, both off and online!
                    </p>
                    <h1 className="about__title"><div className="about__status online"><img alt=""/></div>Online</h1>
                    <p className="about__text">
                        In the past, I've had the priviledge of working with a start-up, a non-profit, and with individual clients as a freelance developer. 
                    </p>
                    <h1 className="about__title"><div className="about__status offline"><img alt=""/></div>Offline</h1>
                    <p className="about__text">When I'm not coding, I enjoy playing video games, hiking, and cooking. <br /><br /> 
                    My favorite games are League of Legends and Overwatch, and my favorite meal is Sunday Brunch!</p>
                </div>
            </section>
        </div>
    )
}

export default about

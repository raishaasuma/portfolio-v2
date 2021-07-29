import React from 'react';
import '../styles/Banner.css';
import { Link } from 'gatsby';

function Banner() {
    return (
        <div className="banner">
            <div className="banner__content">
                <h3 className="banner__content_medium">Hi, my name is Raisha</h3>
                <h1 className="banner__content_big">I build <span href="" className="text_em">awesome</span> websites.</h1>
                <p className="banner__content_small">I'm a front-end developer based in California. I specialize in making the internet <span className="text_highlight pink">prettier</span> and more <span className="text_highlight purple">fun</span> with <span className="text_highlight blue">React.</span>
                <br /><br /> 
                I am currently looking for new career opportunities in Los Angeles, San Francisco and Seattle!</p>
                <Link style={{textDecoration: "none"}} to="/work"><span className="banner__button">see my work</span></Link>
            <p></p>
            </div>
        </div>
    )
}

export default Banner

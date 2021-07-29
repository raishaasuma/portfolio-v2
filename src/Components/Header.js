import React,  {useState } from 'react';
import { Link } from 'gatsby';
import '../styles/Header.css';

function Header({ menuLinks }) {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <nav>
            <div className="logo-container"><Link className="logo" to="/">Raisha Asuma</Link></div>
            <ul>
                {menuLinks.map(link => (
                        <Link key={link.name} className="link" to={link.link}><li className="link__text">{link.name}</li></Link>
                ))}
                <a className="link" href="https://docs.google.com/document/d/e/2PACX-1vQ6j8fFifi59mAvk-GrnlPc3ELegVOaiJ4gH1LU01wZreodbRatpMrjkfxHe9Md40LAe-5GoSuNRTji/pub" target="_blank" rel="noreferrer"><li className="link__text link__resume">resume</li></a>

            </ul>
            
            {/* MOBILE MENU */}
            <div className={`menu__overlay ${open ? "": "menu_closed"}`}>
                    <span className="menu__close__btn"></span>
                    <div className="menu__content">
                        <Link to="/" className="menu__link">home</Link>
                        <Link to="/work" className="menu__link">work</Link>
                        <Link to="/about" className="menu__link">about</Link>
                        <Link to="/contact" className="menu__link">contact</Link>
                        <a className="menu__link menu__resume" href="https://docs.google.com/document/d/e/2PACX-1vQ6j8fFifi59mAvk-GrnlPc3ELegVOaiJ4gH1LU01wZreodbRatpMrjkfxHe9Md40LAe-5GoSuNRTji/pub" target="_blank" rel="noreferrer">resume</a>
                    </div>
                </div>
                <button onClick={() => handleClick()} className="menu__open__btn">
                <div className={`menu_icon ${open ? "menu_open": "menu_closed"}`}>
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="three"></span>
                </div>
                </button>
        </nav>
    )
}

export default Header

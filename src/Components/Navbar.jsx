import React from 'react'
import { FiGrid, FiUser, FiCast, FiMail, FiUploadCloud, FiFeather, FiSettings, FiInstagram, FiFacebook, FiGithub } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navlist">
                    <ul>
                        <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500}><span className='navbar-icon'>Home</span><FiGrid /></Link></li>
                        <li><Link to="work" spy={true} smooth={true} duration={500}><span className='navbar-icon'>Work</span><FiUploadCloud /> </Link></li>
                        <li><Link to="about" spy={true} smooth={true} duration={500}><span className='navbar-icon'>About</span><FiUser /> </Link></li>
                        <li><Link to="review" spy={true} smooth={true} duration={500}><span className='navbar-icon'>Review</span><FiFeather /> </Link></li>
                        <li><Link to="blog" spy={true} smooth={true} duration={500}><span className='navbar-icon'>Blog</span><FiCast /> </Link></li>
                        <li><Link to="contact" spy={true} smooth={true} duration={500}><span className='navbar-icon'>Contact</span><FiMail /> </Link></li>
                        <li><a type='button'><span className='navbar-icon'>Setting</span><FiSettings /> </a></li>
                    </ul>
                </div>
            </div>
            {/* <div className="social-media">
                <ul>
                    <li><a href=""><FiInstagram /></a></li>
                    <li><a href=""><FiFacebook /></a></li>
                    <li><a href=""><FiGithub /></a></li>
                </ul>
            </div> */}
        </>
    )
}

export default Navbar
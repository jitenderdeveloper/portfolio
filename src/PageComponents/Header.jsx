// import React, { useEffect, useState } from 'react'
// import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from "react-icons/bs";
import { TypeAnimation } from 'react-type-animation';
import ThemeLight from '../Components/ThemeLight';

function Header() {

    return (
        <>
            <div className="container p-0" id='home'>
                <div className="row m-0">
                    <div className="col-12 p-0">
                        <div className="Header-section">
                            <div className="header-content">
                                <h3>Hey, Every<span className='span'>one</span> </h3>
                                <h1 className='h1-heading'>im <span className='span'>JTIENDER</span></h1>
                            </div>
                            <TypeAnimation
                                sequence={[
                                    '👉 I am Developer.',
                                    1000,
                                    '👉 I am Designer.',
                                    1000,
                                    '👉 I am YouTuber.',
                                    1000,
                                    '👉 I am Freelancer.',
                                    1000,
                                ]}
                                speed={10} // Custom Speed from 1-99 - Default Speed: 40
                                style={{ fontSize: '20px' }}
                                wrapper="h6" // Animation will be rendered as a <span>
                                repeat={Infinity} // Repeat this Animation Sequence infinitely
                            />
                            <span className='buble-span'> <img src="assets/image/technology/react.png" alt="" /></span>
                            <span className='buble-span1'> <img src="assets/image/technology/react-native.png" alt="" /></span>
                            <span className='buble-span2'> <img src="assets/image/technology/node.png" alt="" /></span>
                            <span className='buble-span3'> <img src="assets/image/technology/material.png" alt="" /></span>
                            <span className='buble-span4'> <img src="assets/image/technology/angular.png" alt="" /></span>
                            <span className='buble-span5'> <img src="assets/image/technology/code.png" alt="" /></span>
                            <ThemeLight />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
import React, { useState } from 'react'
import { useEffect } from 'react';
import { BsFillCapslockFill } from 'react-icons/bs';

function GoToUp() {

    const [scroll, setScroll] = useState(false)

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    const listenScroll = () => {
        let h = 200;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > h) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScroll);
        return () => window.removeEventListener('scroll', listenScroll);
    }, [])


    return (
        <>
            {scroll && (<button className='GoToUp' onClick={goToBtn}><BsFillCapslockFill /></button>)}
        </>
    )
}

export default GoToUp
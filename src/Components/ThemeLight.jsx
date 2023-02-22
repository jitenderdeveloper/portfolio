import React, { useEffect, useState } from 'react'
import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from "react-icons/bs";

function ThemeLight() {

    const [mode, setMode] = useState("light-mode")
    const [text, setText] = useState(<BsFillBrightnessHighFill />)
    const ModeHandler = () => {
        if (mode === "dark-mode") {
            setMode("light-mode")
            setText(<BsFillMoonStarsFill />)
        } else {
            setMode("dark-mode")
            setText(<BsFillBrightnessHighFill />)
        }

    }

    useEffect(() => {
        document.body.className = mode;
    }, [mode])


    return (
        <span className='buble-span6 other-btn' onClick={ModeHandler}>{text}</span>
    )
}

export default ThemeLight
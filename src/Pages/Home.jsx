import React from 'react'
import Blogs from '../PageComponents/Blogs'
import Contact from '../PageComponents/Contact'
import GoodDeveloper from '../PageComponents/GoodDeveloper'
import Header from '../PageComponents/Header'
import Portfolio from '../PageComponents/Portfolio'
import Review from '../PageComponents/Review'
import Skill from '../PageComponents/Skill'
import Navbar from '../Components/Navbar'
import Clients from '../PageComponents/Clients'

function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <GoodDeveloper />
            <Portfolio />
            <Skill />
            <Clients />
            <Review />
            <Blogs />
            <Contact />
        </>
    )
}

export default Home
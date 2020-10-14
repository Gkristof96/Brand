import React, { useState } from 'react'
import Hero from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import Trainers from '../components/TrainersSection'
import Prices from '../components/PriceSection'
import Contact from '../components/ContactSection'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => setIsOpen(!isOpen)
    return (
        <>
            <Navbar isOpen={isOpen} handleOpen={handleOpen} />
            <Topbar isOpen={isOpen}/>
            <Hero />
            <Trainers />
            <Prices />
            <Contact />
        </>
    )
}

export default Home
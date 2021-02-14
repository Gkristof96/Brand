import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
 
const Navbar = ({toggle, isOpen}) => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const  changeNav = () => {
            if(window.scrollY >= 80) {
                setScroll(true)
            }
            else {
                setScroll(false)
            }
        }

        window.addEventListener('scroll',changeNav)
    },[])
    
    return (
        <>
            <header className={`${scroll || isOpen ? 'scrolled' : ''}`}>
                <nav className='nav'>
                    <div className='nav__logo'>
                        <img src='images/health.png' alt='logo' />
                        <h1><Link smooth={true} duration={500} spy={true} exact="true" offset={-81} className='menu__link' to='home'>Cross Gym</Link></h1>
                    </div>
                    <div className='nav__hamburger'>
                        {isOpen ? <FaTimes onClick={toggle}/> : <FaBars onClick={toggle}/>}
                    </div>
                    <div className='nav__navbar'>
                        <ul className='menu'>
                            <li className='menu__item'><Link smooth={true} duration={500} spy={true} exact="true" offset={-81} className='menu__link' to='trainers'>Trainers</Link></li>
                            <li className='menu__item'><Link smooth={true} duration={500} spy={true} exact="true" offset={-81} className='menu__link' to='prices'>Prices</Link></li>
                            <li className='menu__item'><Link smooth={true} duration={500} spy={true} exact="true" offset={-81} className='menu__link' to='contact'>Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
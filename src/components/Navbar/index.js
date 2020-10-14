import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
 
const Navbar = ({handleOpen, isOpen}) => {
    return (
        <>
            <header>
                <nav className='nav'>
                    <div className='nav__logo'>
                        <img src='images/health.png' alt='logo' />
                        <h1><a>Cross Gym</a></h1>
                    </div>
                    <div className='nav__hamburger'>
                        {isOpen ? <FaTimes onClick={() => handleOpen()}/> : <FaBars onClick={() => handleOpen()}/>}
                    </div>
                    <div className='nav__navbar'>
                        <ul className='menu'>
                            <li className='menu__item'><a className='menu__link' href='/'>Trainers</a></li>
                            <li className='menu__item'><a className='menu__link' href='/'>Trainers</a></li>
                            <li className='menu__item'><a className='menu__link' href='/'>Trainers</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
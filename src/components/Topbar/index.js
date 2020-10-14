import React from 'react'

const Topbar = ({isOpen}) => {
    return (
        <div className={`topbar${isOpen ? ' open' : ''}`}>
            <ul className='topbar__menu'>
                <li className='topbar__item'><a className='topbar__link' href='/'>Trainers</a></li>
                <li className='topbar__item'><a className='topbar__link' href='/'>Prices</a></li>
                <li className='topbar__item'><a className='topbar__link' href='/'>Contact</a></li>
            </ul>
        </div>
    )
}

export default Topbar
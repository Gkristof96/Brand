import React from 'react'
import { Link} from 'react-scroll'

const Topbar = ({isOpen, toggle}) => {
    return (
        <div className={`topbar${isOpen ? ' open' : ''}`}>
            <ul className='topbar__menu' >
                    <li className='topbar__item'><Link onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-81} className='topbar__link' to='trainers'>Trainers</Link></li>
                    <li className='topbar__item'><Link onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-81} className='topbar__link' to='prices'>Prices</Link></li>
                    <li className='topbar__item'><Link onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-81} className='topbar__link' to='contact'>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Topbar
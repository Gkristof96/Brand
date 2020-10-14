import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div class='footer-content'>
                    <a href="#home" class="nav-logo">
                        <img src="health.png" alt="logo" />
                        <h2>Cross Gym</h2>
                    </a>
                    <h5>If you want to <span>change</span></h5>
                        <h2 class='social'>Follow Us</h2>
                        <ul class='social-list'>
                            <li>
                            Facebook
                            </li><li>
                            Instagram
                            </li>
                            <li>
                            Twitter
                            </li>
                            <li>
                            Youtube
                            </li>
                        </ul>
                        <h2 class='navlink'>Navigation Links</h2>
                            <ul class='links'>
                                <li><a href='#trainers'>Trainers</a></li>
                                <li><a href='#prices'>Prices</a></li>
                                <li><a>About</a></li>
                                <li><a href='#contact'>Contact</a></li>
                            </ul>
                </div>
            </footer>  
        </>
    )
}

export default Footer
        
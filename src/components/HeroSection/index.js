import React from 'react'

const Hero = () => {
    return (
        <> 
            <div className='hero-container'>
                <img className='hero-background' src='images/background.jpg' alt='bg' />
                <div className='hero-content'>
                    <h1 className='hero-content__title'>Cross gym where the <span>journey</span> begin</h1>
                    <a className='hero-content__btn' href='#'>See More</a>
                </div>
            </div>
        </>
    )
}

export default Hero
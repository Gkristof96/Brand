import React from 'react'

const Trainers = () => {
    return (
        <>
            <div className="trainers-container" id='trainers'>
                <div className="trainers-content">
                    <h3 className='trainers-content__title'>Our Trainers</h3>
                    <div className="trainers-content__trainer one">
                        <div className="image-wrapper">
                            <img src="images/trainer_1.png" alt="trainer one" />
                        </div>
                        <h4>George Franko</h4>
                    </div>
                    <div className="trainers-content__trainer two">
                        <div className="image-wrapper">
                            <img src="images/trainer_2.png" alt="trainer two" />
                        </div>
                        <h4>Iris Wrenger</h4>
                    </div>
                    <div className="trainers-content__trainer three">
                        <div className="image-wrapper">
                            <img src="images/trainer_3.png" alt="trainer three" />
                        </div>
                        <h4>Marcus Floyd</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trainers

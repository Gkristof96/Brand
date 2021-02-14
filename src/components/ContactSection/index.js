import React, { useState} from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
    const [values, setValues] = useState({
        email: '',
        name: '',
        message: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('send')
    }
    return (
        <>
            <div className="contact-container" id='contact'>
                <div className="contact-content">
                <h3 className='contact-content__title'>Contact Us</h3>
                <div className='contact-content__textwrapper'>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. s containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <ul className='contact-list'>
                            <li><FaEnvelope className='icon' /> Email</li>
                            <li><FaPhoneAlt className='icon'/> Phone</li>
                            <li><FaMapMarkerAlt className='icon'/> Adress</li>
                        </ul>
                    </div>
                    <form className='contact-content__card' onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Name</label>
                        <input type="text" name='name' value={values.name} onChange={(e) => setValues({...values, name: e.target.value})}/>
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="text"  name='email'value={values.email} onChange={(e) => setValues({...values, email: e.target.value})}/>
                    </div>
                    <div className="input-group">
                        <label>Subject</label>
                        <textarea name='message' value={values.message} onChange={(e) => setValues({...values, message: e.target.value})}/>
                    </div>
                    <input type="submit" className="btn" value='Send'/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
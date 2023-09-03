import React, { useState } from 'react';
import './Contact.css'

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name: ' + name);
        console.log('Email: ' + email);
        console.log('Message: ' + message);
    };

    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <div className='contact-form'>
                <form onSubmit={handleSubmit}>
                    <input 
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                    <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    <textarea 
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
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
                <form onSubmit={handleSubmit}></form>
            </div>
        </section>
    );
}

export default Contact;
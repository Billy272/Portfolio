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
        <div className="contact">
            <h2></h2>
        </div>
    );
}

export default Contact;
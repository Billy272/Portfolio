import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <header  className="header">
            <div className="header-content">
                <div className="text-content">
                    <h1>{props.name}</h1>
                    <p>{props.profession}</p>
                </div>
                <div className='text-line'>
                    <ul className='horizontal-nav'>
                        <li><a href='./Header.js'>Home</a></li>
                        <li><a href='../About'>About</a></li>
                        <li><a href='../Projects'>Projects</a></li>
                        <li><a href='../Contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;
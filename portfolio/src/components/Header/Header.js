import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <header  className="header">
            <div className="header-content">
            <img src={require('./profile.jpg').default} alt="Profile" className="profile-image" />
                <div className="text-content">
                    <h1>{props.name}</h1>
                    <p>{props.profession}</p>
                </div>
            </div>
        </header>
    )
}
export default Header;
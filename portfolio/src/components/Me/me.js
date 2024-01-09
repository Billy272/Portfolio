import React from 'react';
import './Me.css';

function Me(props) {
    return (
        <div className="Me">
            <h1>{props.name}</h1>
            <p>{props.profession}</p>
        </div>
    );
}

export default Me;
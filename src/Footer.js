// define footer component
import React from 'react';
import './Footer.css';

function Footer() {
    const year = new Date().getFullYear();
    const currentTime = new Date().toLocaleTimeString();

    return (
        <div className="Footer">
        <h1>Allen Stevens </h1>
        <p>{year}</p>
        <p>{currentTime}</p>
        </div>
    )
    }

export default Footer
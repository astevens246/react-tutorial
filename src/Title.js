// src/Title.js
import './Title.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Title() {
  return (
    <div className= "Title">
      <div>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/">Home</NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/about">About</NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/newsletter">Newsletter</NavLink>
      </div>
    <div className="Title-Name">
    <h1>SFPOPOS</h1>
    </div>
    <div className="Title-Container">
      <div>
        <input type="search" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="Title-Subtitle">San Francisco's Privately Owned Public Spaces</div>
    </div>
    </div>
  )
}
  
  export default Title
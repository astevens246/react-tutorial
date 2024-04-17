import React from 'react';
import './Newsletter.css';

function Newsletter() {
  return (
    <div>
      <h1>Newsletter</h1>
      <form className="Newsletter-Form">
        <div className="User-Info">
        <label>
          Username:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        </div>
        <div className="User-Preferences">
        <label>
          <input type="checkbox" name="newsletter" />
          I would like to receive the SFPOPOS newsletter.
        </label>
        <label>
          <input type="checkbox" name="signup" />
          Sign Up
        </label>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
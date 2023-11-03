import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SignUpForm() {
    return(
        <form className="login-form flex-center-w">
            <h2>Create an Account</h2>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Enter username here" />
            </div>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" placeholder="Enter your email address here" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter a password" />
            </div>
            <div>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" name="confirm-password" placeholder="Confirm your password" />
            </div>
            <button type="submit" className="voting-button">Create Account</button>
        </form>
    );
}

export default SignUpForm;
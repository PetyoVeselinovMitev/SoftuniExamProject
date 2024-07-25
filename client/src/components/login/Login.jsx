import React from 'react';
import './Login.css'; 

export default function Login() {
    return (
        <div className="login-container">
            <form className="login-form">
                <h1>login</h1>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">login</button>
            </form>
        </div>
    );
}
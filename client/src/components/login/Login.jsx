import React from 'react';
import './Login.css';
import { useForm } from '../../hooks/useForm';
import { useUserLogin } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const login = useUserLogin();
    const navigate = useNavigate();
    const { values, changeHandler, submitHandler } = useForm(
        { email: '', password: '' },
        async ({ email, password }) => {
            try {
                await login(email, password); 
                navigate('/');
            } catch (error) {
                console.error(error.message);
            }
        }
    );

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={submitHandler}>
                <h1>login</h1>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={changeHandler}
                    placeholder="user@gmail.com"
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={changeHandler}
                />
                <button type="submit">login</button >
            </form>
        </div>
    );
}
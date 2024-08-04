import { useState } from 'react';
import './Login.css';
import { useForm } from '../../hooks/useForm';
import { useUserLogin } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const initialValues = { email: '', password: '' }

export default function Login() {
    const [error, setError] = useState('');
    const login = useUserLogin();
    const navigate = useNavigate();
    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password); 
            navigate('/program');
        } catch (error) {
            setError(error.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        loginHandler
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
                {error && <p className="error">{error}</p>}
                <button type="submit">login</button >
            </form>
        </div>
    );
}
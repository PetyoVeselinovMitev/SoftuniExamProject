import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useUserRegister } from '../../hooks/useAuth';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

const initialValues = {
    name: '',
    email: '',
    password: '',
    rePass: ''
}

export default function Register() {
    const [error, setError] = useState('');
    const register = useUserRegister();
    const navigate = useNavigate();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const registerHandler = async ({ name, email, password, rePass }) => {
        if (!name || !email || !password || !rePass) {
            setError('All fields are required!');
            return;
        }
        
        if (password.length < 6) {
            setError('Password must be at least 6 characters long!');
            return;
        }
        if (!emailRegex.test(email)) {
            setError('This does not look like an email.');
            return;
        }

        if (password !== rePass) {
            setError('Passwords do not match!');
            return;
        }

        try {
            await register(name, email, password);
            navigate('/');
        } catch (error) {
            setError(error.message);
            console.error(error.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={submitHandler}>
                <h1>Register</h1>
                <input
                    type="text"
                    id='name'
                    name='name'
                    value={values.name}
                    onChange={changeHandler}
                    placeholder="Name"
                />
                <input
                    type="text"
                    id='email'
                    name='email'
                    value={values.email}
                    onChange={changeHandler}
                    placeholder="Email"
                />
                <input
                    type="password"
                    id='password'
                    name='password'
                    value={values.password}
                    onChange={changeHandler}
                    placeholder="Password"
                />
                <input
                    type="password"
                    id='rePass'
                    name='rePass'
                    placeholder="Repeat Password"
                    value={values.rePass}
                    onChange={changeHandler}
                />
                {error && (
                    <p className='error'>
                        <span>{error}</span>
                    </p>
                )}
                <button type="submit">Register</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
}
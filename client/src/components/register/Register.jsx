import { useNavigate } from 'react-router-dom';
import { useUserRegister } from '../../hooks/useAuth';
import './Register.css';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';

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

    const registerHandler = async ({ name, email, password, rePass }) => {
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
            </form>
        </div>
    );
}
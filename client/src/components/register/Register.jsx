import './Register.css';

export default function Register() {
    return (
        <div className="register-container">
            <form className="register-form">
                <h1>Register</h1>
                <input
                    type="text"
                    id='name'
                    name='name'
                    placeholder="Name"
                />
                <input
                    type="text"
                    id='email'
                    name='email'
                    placeholder="Email"
                />
                <input
                    type="password"
                    id='password'
                    name='password'
                    placeholder="Password"
                />
                <input
                    type="password"
                    id='repass'
                    name='repass'
                    placeholder="Repeat Password"
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
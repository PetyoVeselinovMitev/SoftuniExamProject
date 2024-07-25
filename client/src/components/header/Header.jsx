import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
	return (
		<header className="header">
			<nav className="navbar">
				<ul className="nav-links">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/program">Program</Link></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/register">Register</Link></li>
				</ul>
				<div className="user-section">
					<span>Welcome, User!</span>
					{/* if loged in user is the admin show this link */}
					<li><Link to="/admin">Admin panel</Link></li>
					{/* else show reservations */}
					<li><Link to="/user/reservations">My reservations</Link></li>
					{/* for loged in users */}
					<li><Link to="/logout">Logout</Link></li>
				</div>
			</nav>
		</header>
	);
};

export default Header;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {
	const { isAuthenticated, name, isAdmin } = useContext(AuthContext);
	return (
		<header className="header">
			<nav className="navbar">
				<ul className="nav-links">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/program">Program</Link></li>
					{!isAuthenticated
						&& (
							<>
								<li><Link to="/login">Login</Link></li>
								<li><Link to="/register">Register</Link></li>
							</>
						)}
				</ul>
				{isAuthenticated
					&& (<div className="user-section">
						<span>Welcome, {name}!</span>
						{isAdmin
						? <li><Link to="/admin">Admin panel</Link></li>
						: <li><Link to="/user/reservations">My reservations</Link></li>
						}
						<li><Link to="/logout">Logout</Link></li>
					</div>
					)}
			</nav>
		</header>
	);
};

export default Header;
import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ user, handleLogout }) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/"><h4>JWT Auth Template</h4></Link>
                {user ?
                    <ul id="nav-mobile" className="right">
                        <li><Link to=" " className="nav-link">Welcome, {user.name}</Link></li>
                        <li><Link to=" " className="nav-link" onClick={handleLogout}>Log Out</Link></li>
                    </ul>
                    :
                    <ul id="nav-mobile" className="right">
                        <li><Link to="/login" className="nav-link">Log In</Link></li>
                        <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
                    </ul>
                }
            </div>
        </nav>
    )
}

export default NavBar;
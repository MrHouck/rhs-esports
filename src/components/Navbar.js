import React, {useState } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from './Button';
import './Navbar.css';
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                   <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={require("../assets/images/logo.png")} alt="Logo" className='logo'/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
                                Events
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Live Matches
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar;
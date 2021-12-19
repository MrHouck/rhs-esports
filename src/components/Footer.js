import React from 'react'
import {Link} from 'react-router-dom';
import './Footer.css';
function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2>Games</h2>
                        <Link to='/h'>game1</Link>
                        <Link to='/'>game2</Link>
                        <Link to='/'>game3</Link>
                        <Link to='/'>game4</Link>
                        <Link to='/'>game5</Link>
                        <Link to='/'>game6</Link>
                    </div>
                </div>
                <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2>Games</h2>
                        <Link to='/h'>game1</Link>
                        <Link to='/'>game2</Link>
                        <Link to='/'>game3</Link>
                        <Link to='/'>game4</Link>
                        <Link to='/'>game5</Link>
                        <Link to='/'>game6</Link>
                    </div>
                </div>
                <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2>Games</h2>
                        <Link to='/h'>game1</Link>
                        <Link to='/'>game2</Link>
                        <Link to='/'>game3</Link>
                        <Link to='/'>game4</Link>
                        <Link to='/'>game5</Link>
                        <Link to='/'>game6</Link>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}

export default Footer;
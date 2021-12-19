import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';


function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Rustin ESports</h1>
            <p>Official page for Rustin HS ESports</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>View Upcoming Events</Button>

            </div>
        </div>
    )
}

export default HeroSection;
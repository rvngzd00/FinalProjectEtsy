import React from 'react';
import '../assets/style/Hero.css';
import { Link } from 'react-router-dom';

export default function Hero({ card1, card2 }) {
    return (
        <div className='container'>
            <div className="hero-cards">
                <Link to={card1.targetLink} className="hero-card-left">
                    <div className="hero-card-content">
                        <h3 className='hero-card-heading'>{card1.heading}</h3>
                        <p className='hero-card-paragraph'>{card1.paragraph}</p>
                        <p className='hero-card-button'>{card1.targetText}</p>
                    </div>
                    <div className="hero-card-image">
                        <img src={card1.imgSrc} alt={card1.heading} />
                    </div>
                </Link>
                <Link to={card2.targetLink} style={{
                    backgroundImage: `linear-gradient(#0e0e0e00 48%, #0e0e0e91 100%),
                url(${card2.imgSrc})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
                    className="hero-card-right">
                    <h4>{card2.heading}</h4>
                    <p>{card2.paragraph}</p>
                </Link>
            </div>
        </div>
    );
} 
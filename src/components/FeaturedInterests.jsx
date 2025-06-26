import React from 'react';
import '../assets/style/FeaturedInterests.css';
import { Link } from 'react-router-dom';



export default function FeaturedInterests({ featuredCards }) {
  return (
    <div className="container">
      <h4>Jump into featured interests</h4>
      <div className="featured-cards">
        {featuredCards.map((card, index) => (
          <Link key={index} className="featured-card" to={card.cardLink}
            style={{
              backgroundImage: `url(${card.cardImg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}>
            <p className="featured-card-text">{card.cardText} <span className="card-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m18.414 12-5.707 5.707-1.414-1.414L14.586 13H6v-2h8.586l-3.293-3.293 1.414-1.414z"></path></svg></span></p>
          </Link>
        ))}
      </div>
    </div>

  );
} 
import React from 'react';
import '../assets/style/DiscountCards.css';
import { Link } from 'react-router-dom';



export default function DiscountCards({ discountCards }) {
  return (
    <div className="container">
      <div className="discount-cards">
        {discountCards.map((card, index) => (
          <Link key={index} className="discount-card" to={card.cardLink}
            style={{
              backgroundImage: `url(${card.cardImg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}>
            <p className="discount-card-text">{card.cardPrice}</p>
            <button className="favorite-button" >
              <span className='favorite-button-svg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </button>
          </Link>

        ))}
      </div>
    </div>

  );
} 
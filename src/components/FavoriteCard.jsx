import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FavoritesContext } from '../context/FavoritesContext'
import "../assets/style/FavoriteCard.css"

function FavoriteCard({ cardDetail }) {
    const { removeFromFavorites } = useContext(FavoritesContext);

    return (
        <div className='favorite-card'>
            <Link key={cardDetail.id} className='favorite-card' to={`/product/${cardDetail.id}`}>
                <img src={cardDetail.productImages[0]} alt="Product Image" className='favorite-image' />
                <span className='favorite-title'>{cardDetail.productTitle}</span>
                <div className="favorite-price-section">
                    <span className='favorite-price'>
                        USD {cardDetail.price}
                    </span>
                    <span className='favorite-old-price'>USD {cardDetail.oldPrice} </span>
                </div>
                <span className='favorite-product-seller'>{cardDetail.sellerName}</span>
            </Link>
            <button
                className="favorite-page-button"
                onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault(); // ehtiyat üçün
                    removeFromFavorites(cardDetail.id);
                }}>
                <span className='favorite-page-button-svg'>
                    <svg style={{ fill: 'red', stroke: 'black' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path>
                    </svg>
                </span>
            </button>

        </div>
    )
}

export default FavoriteCard;



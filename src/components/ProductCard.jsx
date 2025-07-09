import React from 'react'
import { Link } from 'react-router-dom'
import RateStar from '../components/RateStar';
import "../assets/style/ProductCard.css"

function ProductCard({ cardDetail }) {
    return (
        <Link key={cardDetail.id} className='product-card' to={`/product/${cardDetail.id}`}>
            <img src={cardDetail.productImages[0]} alt="Product Image" className='product-image' />
            <span className='product-title'>{cardDetail.productTitle}</span>
            <RateStar count={cardDetail.sellerRate} />
            <div className="price-sectionn">
                <span className='product-price'>
                    USD {cardDetail.price}
                </span>
                <span className='old-price'>USD {cardDetail.oldPrice} </span>
            </div>
            <span className='product-seller'>{cardDetail.sellerName}</span>
        </Link>
    )
}

export default ProductCard;



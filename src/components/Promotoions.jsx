import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/style/Promotions.css"
export default function Promotions({ promotionCards }) {
    return (
        <div className='container'>
            <h5 className='promotion-section-heading'>Save now on standout styles</h5>
            <div className="promotion-cards">
                {promotionCards.map((item, index) =>
                    <Link key={index} to={item.catLink} className="promotion-card">
                        <img src={item.imageSrc} alt="Promotion Category Image" />
                        <p className='promotion-category'>
                            {item.categoryName}<br/>
                            {item.discount}
                        </p>
                    </Link>
                )}
            </div>

        </div>
    )
}

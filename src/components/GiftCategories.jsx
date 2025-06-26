import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/style/GiftCategories.css"
export default function GiftCategories({ giftCategories }) {
    return (
        <div className='container'>
            <h5 className='gift-section-heading'>Gifts as special as they are</h5>
            <div className="gift-cards">
                {giftCategories.map((item, index) =>
                    <Link key={index} to={item.catLink} className="gift-card">
                        <img src={item.imageSrc} alt="Gift Category Image" />
                        <p className='gift-category'>
                            {item.categoryName}
                        </p>
                    </Link>
                )}
            </div>

        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/style/PopularCategories.css"
export default function PopularCategories({ popularCategories }) {
    return (
        <div className='container'>
            <h5 className='popular-section-heading'>Shop our most popular categories</h5>
            <div className="popular-cards">
                {popularCategories.map((item, index) =>
                    <Link key={index} to={item.catLink} className="popular-card">
                        <img src={item.imageSrc} alt="Popular Category Image" />
                        <p className='popular-category'>
                            {item.categoryName}
                        </p>
                    </Link>
                )}
            </div>

        </div>
    )
}

import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FavoriteCard from "../components/FavoriteCard.jsx"
import "../assets/style/Favorites.css"
import Product from './Product'
import { FavoritesContext } from "../context/FavoritesContext.jsx";
function Favorites() {
    const { favorites } = useContext(FavoritesContext)
    return (
        <div className='container'>
            <div className='card-container'>
                {
                    favorites.map((card) => (
                        <FavoriteCard key={card.id} cardDetail={card} />
                    ))
                }
            </div>
        </div>
    )
}

export default Favorites

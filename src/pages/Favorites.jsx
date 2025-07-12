import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FavoriteCard from "../components/FavoriteCard.jsx"
import "../assets/style/Favorites.css"
import Product from './Product'
import { FavoritesContext } from "../context/FavoritesContext.jsx";
function Favorites() {
    const { favorites } = useContext(FavoritesContext)

    if (favorites.length === 0) {
        return (
            <div className="favorites-page">
                <div className="container">
                    <h2>Your Favorites is empty</h2>
                    <p>Looks like you haven't liked anything yet.</p>
                    <Link to="/">Explore The products</Link>
                </div>
            </div>
        );
    }
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

import React from 'react'
import "../assets/style/SpecialGifts.css"
import { Link } from 'react-router-dom'
export default function SpecialGifts({ specialCards }) {
    return (
        <div className="container">
            <div className="special-gifts-section">
                <div className="special-gifts-text">
                    <h5>Etsy-special gifts for birthdays</h5>
                    <Link>Get Inspired</Link>
                </div>
                <div className="special-cards">
                    {specialCards.map((card, index) => (
                        <Link key={index} className="special-card" to={card.cardLink}
                            style={{
                                backgroundImage: `linear-gradient(#0e0e0e00 48%, #0e0e0e91 100%),
                                url(${card.cardImg})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'

                            }}>
                            <p className="special-card-text">{card.cardText} <span className="card-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m18.414 12-5.707 5.707-1.414-1.414L14.586 13H6v-2h8.586l-3.293-3.293 1.414-1.414z"></path></svg></span></p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

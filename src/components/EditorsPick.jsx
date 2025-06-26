import React from 'react'
import "../assets/style/EditorsPick.css"
import { Link } from 'react-router-dom'
export default function EditorsPick({ editorCards }) {
    return (
        <div className="container">
            <div className="editor-gifts-section">
                <div className="editor-cards">

                    <div className="editor-gifts-text">
                        <p className='editors-pick-text'>Editors’ Picks</p>
                        <h5>The Personalization Shop</h5>
                        <p className='shop-text'>Want to add that personal touch? These sellers specialize in embroidery, engraving, illustrating, and more.</p>
                        <Link>Shop these unique finds</Link>
                    </div>
                    {editorCards.map((card, index) => (
                        <Link key={index} className="editor-card" to={card.catLink}
                            style={{
                                backgroundImage: `url(${card.imageSrc})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                            <p className="editor-card-price">
                                {card.discountPrice == null ? `USD ${card.price}`
                                    : <>USD {card.discountPrice}⠀<del>USD {card.price}</del></>
                                }
                            </p>
                            <button className="favorite-button" >
                                <span className='favorite-button-svg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

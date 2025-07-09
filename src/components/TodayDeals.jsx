import React, { useEffect, useState } from 'react'
import "../assets/style/TodayDeals.css"
import { Link } from 'react-router-dom'
export default function TodayDeals({ dealCards }) {
    function getTime() {
        const now = new Date();
        const totalSecondsInDay = 24 * 60 * 60;
        const currentSeconds =
            now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        const remaining = totalSecondsInDay - currentSeconds;

        const hours = String(Math.floor(remaining / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((remaining % 3600) / 60)).padStart(2, "0");
        const seconds = String(remaining % 60).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}`;
    }
    const [time, setTime] = useState(getTime());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(getTime());
        }, 1000)
        return () => clearInterval(timer);
    })
    return (
        <div className="container">
            <div className="today-deals-section">
                <div className="today-deals-info">
                    <h5>Today's big deals</h5>
                    <span className="clock-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="spinnable-clock-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                            <circle cx="12" cy="12" r="9" stroke="#595959" strokeWidth="2"></circle>
                            <line className="big-hand" x1="12" y1="6.5" x2="12" y2="12" stroke="#595959" strokeWidth="2" strokeLinecap="round"></line>
                            <line className="small-hand" x1="12" y1="12" x2="16.5" y2="12" stroke="#595959" strokeWidth="2" strokeLinecap="round"></line>
                        </svg>
                    </span>
                    <p className='timer-text'>Fresh deals in {time}</p>
                </div>

                <div className="today-cards">

                    {dealCards.map((card, index) => (
                        <Link key={index} className="today-card" to={card.catLink}>
                            <img src={card.imageSrc} alt="Today Deals Card Image" />
                            <div className="card-bottom">
                                <div className='title-section'>
                                    <p className='card-title'>{card.title}</p>
                                    <span className='card-review'>
                                        {card.review}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
                                            <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className='price-section'>
                                    <p className='card-price'>{card.price}</p>
                                    <p className='card-old-price'>{card.oldPrice}</p>
                                    <p className='card-discount'>{card.discount}</p>
                                </div>
                                <p className='card-text'>{card.text}</p>
                                <button className="favorite-button" >
                                    <span className='favorite-button-svg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

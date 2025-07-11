import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Home, HelpCircle } from 'lucide-react';
import '../assets/style/NotFound.css';

export default function NotFound() {
    return (
        <div className="not-found-page">
            <div className="not-found-container">
                <div className="not-found-card">
                    <div className="not-found-icon">
                        <span className="not-found-number">404</span>
                    </div>

                    <h1 className="not-found-title">
                        Oops! This page doesn't exist
                    </h1>
                    <p className="not-found-subtitle">
                        The page you're looking for might have been moved, deleted, or you entered the wrong URL.
                    </p>

                    

                    <div className="not-found-actions">
                        <Link to="/" className="not-found-primary-button">
                            <Home size={20} />
                            Go to homepage
                        </Link>

                    </div>

                    {/* Quick Links */}
                    <div className="not-found-quick-links">
                        <h2 className="quick-links-title">
                            Popular pages
                        </h2>
                        <div className="quick-links-grid">
                            <Link to="/c/" className="quick-link">
                                Browse all items
                            </Link>
                            <Link to="/category/jewelry" className="quick-link">
                                Jewelry & Accessories
                            </Link>
                            <Link to="/c/home" className="quick-link">
                                Home & Living
                            </Link>
                            <Link to="/c/clothing" className="quick-link">
                                Clothing & Shoes
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 
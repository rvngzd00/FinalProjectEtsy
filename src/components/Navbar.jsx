import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Heart, Gift, ShoppingCart } from 'lucide-react';
import { GlobalContext } from '../context/GlobalContext';
import SignInCard from './SignInCard';
import '../assets/style/Navbar.css';

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const { products } = useContext(GlobalContext);

    const filteredResults = products.filter(product =>
        product.productTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const navLinks = [
        { label: 'Gifts', icon: <Gift size={18} className="navbar-menu-icon" />, to: '/gifts' },
        { label: "Seller Deals", to: '/seller-deals' },
        { label: 'Home Favorites', to: '/home-favorites' },
        { label: 'Fashion Finds', to: '/fashion-finds' },
        { label: 'Registry', to: '/registry' },
    ];
    const dropdownLinks = [
        { label: 'Accessories', to: '/c/accessories' },
        { label: 'Art & Collectibles', to: '/c/art-and-collectibles' },
        { label: 'Baby', to: '/c/baby' },
        { label: 'Bags & Purses', to: '/c/bags' },
        { label: 'Bath & Beauty', to: '/c/bath-and-beauty' },
        { label: 'Books, Movies & Music', to: '/c/books-movies-and-music' },
        { label: 'Clothing', to: '/c/clothing' },
        { label: 'Craft Supplies & Tools', to: '/c/craft-supplies-and-tools' },
        { label: 'Electronics & Accessories', to: '/c/electronics-and-accessories' },
        { label: 'Gifts', to: '/c/gifts' },
        { label: 'Home & Living', to: '/c/home-and-living' },
        { label: 'Jewelry', to: '/c/jewelery' },
        { label: 'Paper & Party Supplies', to: '/c/paper-and-party-supplies' },
        { label: 'Pet Supplies', to: '/c/pet-supplies' },
        { label: 'Shoes', to: '/c/shoes' },
        { label: 'Toys & Games', to: '/c/toys-and-games' },
        { label: 'Weddings', to: '/c/weddings' },
    ];
    const searchOptions = [
        {
            label: "Personalized Gifts",
            imgSrc: "https://i.etsystatic.com/10787683/r/il/1a9ec8/3971633698/il_300x300.3971633698_7pto.jpg",
            alt: "Personalized wooden name sign with floral decoration",
        },
        {
            label: "Gifts for Him",
            imgSrc: "https://i.etsystatic.com/44887041/r/il/06aa5b/5096414567/il_300x300.5096414567_831t.jpg",
            alt: "Leather wallet and watch set for men",
        },
        {
            label: "Gifts for Her",
            imgSrc: "https://i.etsystatic.com/12769651/r/il/c6893d/5901892511/il_300x300.5901892511_tv44.jpg",
            alt: "Personalized jewelry with birthstone charms",
        },
        {
            label: "Gifts for Kids",
            imgSrc: "https://i.etsystatic.com/14399695/c/2001/2001/642/0/il/6b3035/5171857250/il_300x300.5171857250_8a9f.jpg",
            alt: "Colorful wooden educational toys for children",
        },
        {
            label: "Outdoor Decor",
            imgSrc: "https://i.etsystatic.com/41221723/c/2290/2290/388/379/il/f82dd8/6202977877/il_300x300.6202977877_b8mi.jpg",
            alt: "Rustic metal garden wind chime",
        },
        {
            label: "Foodie Gifts",
            imgSrc: "https://i.etsystatic.com/12213308/r/il/f917a5/5688366932/il_300x300.5688366932_kv0k.jpg",
            alt: "Gourmet food gift basket with artisanal products",
        }
    ];

    //SignIn Card
    const [showSignUp, setShowSignUp] = useState(false);
    const handleOpenSignIn = () => setShowSignUp(true);
    const handleCloseSignIn = () => setShowSignUp(false);
    // DropDown
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    // SearchSection  
    const [showDropdown, setShowDropdown] = useState(false);
    const wrapperRef = useRef(null);
    // Hamburger menu state
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <nav>
            <div className='container'>
                <div className="navbar-container">

                    {/* Logo */}
                    <Link to="/" className="navbar-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 24" width="80" height="40" role="img" aria-label="[Description of logo]">
                            <path d="M6.547,3.125v6.008c0,0,2.117,0,3.25-0.086c0.891-0.156,1.055-0.242,1.219-1.133l0.328-1.305h0.969l-0.164,2.852 l0.086,2.922h-0.977l-0.242-1.141c-0.242-0.812-0.57-0.977-1.219-1.055c-0.812-0.086-3.25-0.086-3.25-0.086v5.039 c0,0.969,0.492,1.383,1.625,1.383h3.414c1.055,0,2.109-0.086,2.766-1.625l0.883-1.953h0.82c-0.086,0.406-0.492,3.984-0.57,4.789 c0,0-3.086-0.078-4.383-0.078H5.25l-3.492,0.078v-0.883l1.133-0.25c0.82-0.164,1.062-0.406,1.062-1.055 c0,0,0.086-2.195,0.086-5.852c0-3.648-0.086-5.844-0.086-5.844c0-0.727-0.242-0.891-1.062-1.055L1.758,2.555V1.664l3.414,0.07h6.5 c1.297,0,3.484-0.234,3.484-0.234s-0.078,1.375-0.164,4.625h-0.891l-0.328-1.141c-0.32-1.461-0.805-2.188-1.703-2.188H6.961 C6.547,2.797,6.547,2.875,6.547,3.125z M19.703,3.766h0.977V7.18l3.336-0.164l-0.164,1.547l-3.25-0.25v6.016 c0,1.703,0.57,2.359,1.547,2.359c0.883,0,1.539-0.492,1.781-0.898l0.484,0.57c-0.484,1.133-1.859,1.703-3.164,1.703 c-1.617,0-2.93-0.969-2.93-2.836V8.398h-1.938V7.586C18.008,7.422,19.219,6.445,19.703,3.766z M26.695,14.242l0.648,1.547 c0.242,0.648,0.812,1.305,2.109,1.305c1.383,0,1.953-0.734,1.953-1.625c0-2.766-5.445-1.953-5.445-5.688c0-2.109,1.703-3.094,3.898-3.094c0.977,0,2.438,0.164,3.172,0.492c-0.164,0.812-0.25,1.867-0.25,2.68l-0.805,0.078l-0.57-1.625 c-0.164-0.398-0.82-0.727-1.625-0.727c-0.977,0-1.953,0.406-1.953,1.461c0,2.516,5.609,1.953,5.609,5.688c0,2.117-1.867,3.25-4.148,3.25c-1.703,0-3.414-0.656-3.414-0.656c0.164-0.969,0.086-2.023,0-3.086H26.695z M33.031,22.039 c0.242-0.891,0.406-2.023,0.57-3.086l0.891-0.078l0.328,1.703c0.078,0.406,0.32,0.734,0.969,0.734c1.055,0,2.438-0.648,3.742-2.922 c-0.578-1.383-2.281-5.844-3.828-9.258c-0.406-0.898-0.484-0.977-1.047-1.141l-0.414-0.156v-0.82l2.445,0.086l3-0.164V7.75 l-0.734,0.164c-0.57,0.078-0.805,0.398-0.805,0.727c0,0.086,0,0.164,0.078,0.328c0.156,0.492,1.461,4.141,2.438,6.578c0.805-1.703,2.352-5.523,2.594-6.172c0.086-0.328,0.164-0.406,0.164-0.648c0-0.414-0.242-0.656-0.805-0.812L42.039,7.75V6.938 l2.281,0.078l2.109-0.078V7.75l-0.406,0.32c-0.812,0.328-0.898,0.406-1.219,1.062l-3.57,8.359 c-2.117,4.797-4.312,5.203-5.852,5.203C34.406,22.695,33.672,22.445,33.031,22.039z" />
                        </svg>
                    </Link>
                    
                    {/* Menu + Categories */}
                    <div className="navbar-menu-wrapper" ref={dropdownRef}>
                        <button className="navbar-menu-button" onClick={() => setOpen((prev) => (!prev))}>
                            <span className="navbar-menu-icon">
                                <svg aria-hidden="true" focusable="false" width="20" height="20">
                                    <rect x="2" y="8" width="14" height="2" fill="#000"></rect>
                                    <rect x="2" y="13" width="14" height="2" fill="#000"></rect>
                                    <rect x="2" y="3" width="14" height="2" fill="#000"></rect>
                                </svg>
                            </span>

                            <span className='navbar-menu-text'>Categories</span>
                            {open && (
                                <div className="menu-dropdown">
                                    {dropdownLinks.map((link, id) => (
                                        <Link to={link.to} key={id} className="dropdown-link">
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </button>
                    </div>
                    {/* Search Bar */}
                    <div className="navbar-search-section" onClick={() => setShowDropdown(true)}>
                        <div className="search-wrapper" ref={wrapperRef}>
                            <input
                                type="text"
                                placeholder="Search for anything"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="navbar-search-input"
                            />
                            <div className="search-button-section">
                                <button type="submit" className="navbar-search-button">
                                    <Search color="#fff" size={24} />
                                </button>
                            </div>
                        </div>
                        {showDropdown && (
                            <div className="search-dropdown">
                                {searchQuery.trim() === "" ? (
                                    <>
                                        <div className="search-dropdown-heading">Gifts as special as they are</div>
                                        {searchOptions.map((link, id) => (
                                            <Link className="search-option" key={id}>
                                                <img src={link.imgSrc} alt={link.alt} className="search-option-icon" />
                                                <span>{link.label}</span>
                                            </Link>
                                        ))}
                                    </>
                                ) : (
                                    <>
                                        <div className="search-dropdown-heading">Search Results</div>
                                        {filteredResults.length > 0 ? (
                                            filteredResults.slice(0, 7).map((product) => (
                                                <Link
                                                    key={product.id}
                                                    to={`/product/${product.id}`}
                                                    className="search-option"
                                                    onClick={() => setShowDropdown(false)}
                                                >
                                                    <img src={product.productImages[0]} alt={product.productTitle} className="search-option-icon" />
                                                    <span>{product.productTitle}</span>
                                                </Link>
                                            ))
                                        ) : (
                                            <div className="no-result">No results found</div>
                                        )}
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                    {/* Right side */}
                    <nav className={`navbar-nav${navOpen ? ' open' : ''}`}>
                        <span className="navbar-nav-link" onClick={handleOpenSignIn}>Sign in</span>
                        {showSignUp && <SignInCard onClose={handleCloseSignIn} />}
                        <Link to="/favorites" className="navbar-nav-icon"><div className='link-tooltip'><Heart size={23} /> <span className='tooltip'>Favorites</span></div></Link>
                        <Link to="/gifts" className="navbar-nav-icon"> <div className='link-tooltip'><Gift size={23} /> <span className='tooltip'>Gifts</span></div></Link>
                        <Link to="/cart" className="navbar-nav-icon"><div className='link-tooltip'><ShoppingCart size={23} /><span className='tooltip'>Cart</span></div> </Link>
                    </nav>
                </div>
                {/* Navigation links below search bar */}
                <div className="navbar-bottom-nav">

                    {navLinks.map((link, idx) => (
                        <Link key={link.label} to={link.to} className="navbar-bottom-nav-link">
                            {link.icon}
                            {link.label}

                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
import React, { useState, useEffect, useContext } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext.jsx';
import { FavoritesContext } from '../context/FavoritesContext.jsx';
import { CartContext } from '../context/CartContext.jsx';
import '../assets/style/Product.css';
import RateStar from '../components/RateStar';
export default function Product() {
  const { id } = useParams();
  const { products } = useContext(GlobalContext);
  const { addToCart } = useContext(CartContext);
  const { favorites, addToFavorites,removeFromFavorites } = useContext(FavoritesContext);



  const found = products.find(p => String(p.id) === String(id));
  const [productDet, setProductDet] = useState(found);

  const isFavorite = favorites.some(fav => fav.id === productDet.id);
  const [showFavoritePopup, setShowFavoritePopup] = useState(false);
  const [popupText, setPopupText] = useState('');

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  if (!productDet) return <p>Yüklənir...</p>; // 🚨 Əsas hissə buradır


  return (
    <div className="container">
      <div className="product-section">
        <div className="product-wrapper">
          <div className="product-left">
            <div className="product-image-section">
              <div className="product-thumbnails">
                {productDet.productImages.map((thumb, index) => (
                  <div
                    key={index}
                    className={`thumbnail-item ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={thumb} alt={`Product Thumbnail`} />
                  </div>
                ))}
              </div>

              <div className="product-main-image-wrapper">


                <div
                  className="product-heart"
                  onClick={() => {
                    if (isFavorite) {
                      removeFromFavorites(productDet.id);
                      setPopupText('Removed from favorites');
                    } else {
                      addToFavorites(productDet);
                      setPopupText('This favorite won’t last! ');
                    }

                    setShowFavoritePopup(true);
                    setTimeout(() => setShowFavoritePopup(false), 3000);
                  }}

                  title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}>
                  <span className='favorite-button-svg'>
                    <svg style={{ fill: isFavorite ? 'red' : 'white', stroke: isFavorite ? 'red' : 'black' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path>
                    </svg>
                  </span>
                </div>
                {showFavoritePopup && (
                  <div className="favorite-popup">
                    <div>
                      <strong>{popupText}</strong>
                      {popupText === 'This favorite won’t last! ' && (
                        <>
                          <Link to="/">Sign In</Link> to save permanently.
                        </>
                      )}
                    </div>
                  </div>
                )}

                <img src={productDet.productImages[selectedImage]} alt="Product" className="product-main-image" />
                <button onClick={() => setSelectedImage(prev => (prev > 0 ? prev - 1 : productDet.productImages.length - 1))} className="nav-button left">
                  <span className='nav-button-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z"></path></svg>
                  </span>
                </button>
                <button onClick={() => setSelectedImage(prev => (prev < productDet.productImages.length - 1 ? prev + 1 : 0))} className="nav-button right">
                  <span className='nav-button-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8,21a1,1,0,0,1-.664-1.747L15.5,12,7.336,4.747A1,1,0,0,1,8.664,3.253L18.5,12,8.664,20.747A0.994,0.994,0,0,1,8,21Z"></path></svg>
                  </span>
                </button>
              </div>

            </div>

            <div className="product-reviews">
              <strong>{productDet.sellerName}</strong>
              <div className="stars">
                <RateStar count={productDet.sellerRate} />
              </div>
            </div>
          </div>

          <div className="product-right">


            <div className="price-section">
              <span className="price">USD {productDet.price}</span>
              <span className="old-price">USD {productDet.oldPrice}</span>
              <span className="discount-badge">{productDet.discount}% off</span>
            </div>

            <div className="sale-ends">Sale ends in 3 days</div>

            <div className="highlight-box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m15.4 14.1-3.7-1.9-1.8-3.6c-.3-.7-1.4-.7-1.8 0l-1.9 3.7-3.7 1.9c-.3.1-.5.4-.5.8q0 .6.6.9l3.7 1.9 1.9 3.7c.1.3.4.5.8.5q.6 0 .9-.6l1.9-3.7 3.7-1.9c.3-.2.6-.5.6-.9s-.3-.6-.7-.8m6-8L19 4.9l-1.2-2.4c-.3-.7-1.4-.7-1.8 0l-1.2 2.4-2.4 1.2c-.2.2-.4.5-.4.9q0 .6.6.9L15 9.1l1.2 2.4c.2.3.5.6.9.6q.6 0 .9-.6l1.2-2.4 2.4-1.2c.2-.2.4-.5.4-.9q0-.6-.6-.9"></path></svg>
              <strong>New markdown!⠀</strong> Biggest sale in 60+ days
            </div>

            <div className="tax-info">Local taxes included (where applicable)</div>

            <div className="product-description">
              {productDet.productTitle}
            </div>



            <div className="returns-info"> ✓ Returns & exchanges accepted</div>

            <div className="form-group">
              <label>Style</label>
              <select value={selectedStyle} onChange={(e) => setSelectedStyle(e.target.value)}>
                <option value="">Select an option</option>
                {productDet.styles.map(style => (
                  <option key={style.id} value={style.value}>{style.label}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Color selection</label>
              <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                <option value="">Select an option</option>
                {productDet.colors.map(color => (
                  <option key={color.id} value={color.value}>{color.label}</option>
                ))}
              </select>
            </div>



            <div className="form-group">
              <label>Quantity</label>
              <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {[...Array(productDet.stock)].map((_, num) => (
                  <option key={num + 1} value={num + 1}>{num + 1}</option>
                ))}
              </select>
            </div>

            <button className="add-to-cart-button" onClick={() => {
              const selectedProduct = {
                ...productDet,
                selectedStyle,
                selectedColor,
                quantity,
              };
              addToCart(selectedProduct);
            }}>Add to cart</button>
          </div>
        </div>
      </div>
    </div >
  );

} 
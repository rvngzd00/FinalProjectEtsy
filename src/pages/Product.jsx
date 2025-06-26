import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/style/Product.css';

// Import helper components and data
import { 
  productData, 
  relatedProducts,
  RatingStars, 
  PriceDisplay, 
  Badge,
  QuantityControls,
  RelatedProductsSection
} from '../components/helpers';

export default function Product() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariations, setSelectedVariations] = useState({});
  const [quantity, setQuantity] = useState(1);

  const handleVariationChange = (variationName, value) => {
    setSelectedVariations(prev => ({
      ...prev,
      [variationName]: value
    }));
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log('Adding to cart:', {
      product: productData,
      variations: selectedVariations,
      quantity
    });
  };

  const handleBuyNow = () => {
    // Buy now logic here
    console.log('Buying now:', {
      product: productData,
      variations: selectedVariations,
      quantity
    });
  };

  return (
    <div className="product-page">
      <div className="product-container">
        {/* Product Images */}
        <div className="product-images">
          <div className="product-main-image">
            <img
              src={productData.images[selectedImage]}
              alt={productData.title}
              className="main-image"
            />
          </div>
          <div className="product-thumbnails">
            {productData.images.map((image, index) => (
              <button
                key={index}
                className={`thumbnail ${index === selectedImage ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`${productData.title} - view ${index + 1}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info">
          <div className="product-header">
            <h1 className="product-title">{productData.title}</h1>
            <div className="product-shop">
              <span className="shop-name">{productData.shopName}</span>
              <span className="shop-location">{productData.shopLocation}</span>
            </div>
            <div className="product-rating">
              <RatingStars 
                rating={productData.rating} 
                showRating={true} 
                showCount={true} 
                reviewCount={productData.reviewCount}
              />
            </div>
          </div>

          <div className="product-price">
            <PriceDisplay 
              price={productData.price} 
              originalPrice={productData.originalPrice}
            />
          </div>

          {/* Product Variations */}
          {productData.variations && productData.variations.map(variation => (
            <div key={variation.name} className="product-variation">
              <label className="variation-label">{variation.name}</label>
              <div className="variation-options">
                {variation.options.map(option => (
                  <button
                    key={option}
                    className={`variation-option ${
                      selectedVariations[variation.name] === option ? 'selected' : ''
                    }`}
                    onClick={() => handleVariationChange(variation.name, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Quantity */}
          <div className="product-quantity">
            <label className="quantity-label">Quantity</label>
            <QuantityControls
              quantity={quantity}
              onQuantityChange={setQuantity}
            />
          </div>

          {/* Action Buttons */}
          <div className="product-actions">
            <button 
              className="add-to-cart-button"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
            <button 
              className="buy-now-button"
              onClick={handleBuyNow}
            >
              Buy it now
            </button>
          </div>

          {/* Shipping Info */}
          <div className="product-shipping">
            <div className="shipping-info">
              <span className="shipping-cost">
                {productData.shipping.cost > 0 
                  ? `$${productData.shipping.cost} shipping` 
                  : 'Free shipping'
                }
              </span>
              <span className="shipping-time">
                {productData.shipping.estimatedDays}
              </span>
            </div>
            <div className="shipping-location">
              {productData.shipping.location}
            </div>
          </div>

          {/* Product Description */}
          <div className="product-description">
            <h3 className="description-title">About this item</h3>
            <p className="description-text">{productData.description}</p>
          </div>

          {/* Product Features */}
          {productData.features && (
            <div className="product-features">
              <h3 className="features-title">Features</h3>
              <ul className="features-list">
                {productData.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <RelatedProductsSection 
        products={relatedProducts}
        title="You may also like"
      />
    </div>
  );
} 
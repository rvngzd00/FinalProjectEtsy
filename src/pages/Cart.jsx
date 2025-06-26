import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/Cart.css';

// Import helper components and data
import { 
  cartItems, 
  shippingOptions,
  RatingStars, 
  PriceDisplay, 
  QuantityControls,
  EmptyState
} from '../components/helpers';

export default function Cart() {
  const [items, setItems] = useState(cartItems);
  const [selectedShipping, setSelectedShipping] = useState('standard');
  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
      return;
    }
    
    setItems(prev => prev.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (itemId) => {
    setItems(prev => prev.filter(item => item.id !== itemId));
  };

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateShipping = () => {
    const shipping = shippingOptions.find(option => option.id === selectedShipping);
    return shipping ? shipping.cost : 0;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const handleCheckout = () => {
    // Checkout logic here
    console.log('Proceeding to checkout:', {
      items,
      shipping: selectedShipping,
      total: calculateTotal()
    });
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <EmptyState
            title="Your cart is empty"
            description="Looks like you haven't added anything to your cart yet."
            actionText="Start shopping"
            onAction={() => window.location.href = '/'}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h1 className="cart-title">Shopping cart</h1>
          <p className="cart-subtitle">
            {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="cart-content">
          {/* Cart Items */}
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="item-image"
                  />
                </div>
                
                <div className="cart-item-details">
                  <div className="item-info">
                    <h3 className="item-title">
                      <Link to={`/listing/${item.id}`} className="item-link">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="item-shop">by {item.shop}</p>
                    <div className="item-rating">
                      <RatingStars rating={4.8} showCount={true} reviewCount={item.reviews || 0} />
                    </div>
                  </div>
                  
                  <div className="item-price">
                    <PriceDisplay 
                      price={item.price} 
                      originalPrice={item.originalPrice}
                    />
                  </div>
                  
                  <div className="item-quantity">
                    <label className="quantity-label">Quantity</label>
                    <QuantityControls
                      quantity={item.quantity}
                      onQuantityChange={(newQuantity) => updateQuantity(item.id, newQuantity)}
                    />
                  </div>
                  
                  <button 
                    className="remove-item-button"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="order-summary">
            <div className="summary-card">
              <h2 className="summary-title">Order summary</h2>
              
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Shipping</span>
                <span>${calculateShipping().toFixed(2)}</span>
              </div>
              
              <div className="summary-total">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>

              {/* Shipping Options */}
              <div className="shipping-options">
                <h3 className="shipping-title">Shipping options</h3>
                {shippingOptions.map(option => (
                  <label key={option.id} className="shipping-option">
                    <input
                      type="radio"
                      name="shipping"
                      value={option.id}
                      checked={selectedShipping === option.id}
                      onChange={(e) => setSelectedShipping(e.target.value)}
                      className="shipping-radio"
                    />
                    <div className="shipping-info">
                      <span className="shipping-name">{option.name}</span>
                      <span className="shipping-cost">${option.cost.toFixed(2)}</span>
                      <span className="shipping-time">{option.estimatedDays}</span>
                    </div>
                  </label>
                ))}
              </div>

              {/* Promo Code */}
              <div className="promo-code">
                <h3 className="promo-title">Promo code</h3>
                <div className="promo-input-container">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter promo code"
                    className="promo-input"
                  />
                  <button className="promo-button">Apply</button>
                </div>
              </div>

              {/* Checkout Button */}
              <button 
                className="checkout-button"
                onClick={handleCheckout}
              >
                Proceed to checkout
              </button>

              {/* Continue Shopping */}
              <Link to="/" className="continue-shopping">
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
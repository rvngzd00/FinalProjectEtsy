import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/Cart.css';
import RateStar from '../components/RateStar.jsx'; // Tutaq ki, sən bunu var
import { CartContext } from '../context/CartContext.jsx';


const shippingOptions = [
  { id: 'standard', name: 'Standard Shipping', cost: 7.00, estimatedDays: '5-7 days' },
  { id: 'express', name: 'Express Shipping', cost: 17.00, estimatedDays: '2-3 days' },
  { id: 'overnight', name: 'Overnight Shipping', cost: 27.00, estimatedDays: '1 day' }
];

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
  const [selectedShipping, setSelectedShipping] = useState('standard');

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateShipping = () => {
    const shipping = shippingOptions.find(option => option.id === selectedShipping);
    return shipping ? shipping.cost : 0;
  };

  const calculateTotal = () => {
    let total = calculateSubtotal() + calculateShipping();
    return total;
  };

  const handleCheckout = () => {
    console.log('Checkout-a gedir:', {
      cart,
      shipping: selectedShipping,
      total: calculateTotal()
    });
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/">Start shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="cart-header">
        <h1 className="cart-title">Your cart</h1>
        <p className="cart-subtitle">
          {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
        </p>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.productImages?.[0]} alt={item.productTitle || item.title} className="item-image" />
              </div>

              <div className="cart-item-details">
                <div className="item-info">
                  <div className="item-title">
                    <Link to={`/product/${item.id}`} className="item-link">
                      {item.productTitle}
                    </Link>
                  </div>
                  <p className="item-shop">by {item.sellerName}</p>
                </div>
                <div className="item-price">
                  {item.price} $
                </div>


                <div className="item-quantity">
                  <select
                    value={item.quantity}
                    onChange={(e) => {
                      updateQuantity(item.id, Number(e.target.value));
                    }}
                    className="quantity-input"
                  >
                    {[...Array(item.stock).keys()].map(i => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <button className="remove-item-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>

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



            {/* Checkout Button */}
            <button className="checkout-button" onClick={handleCheckout}>Proceed to checkout</button>

            {/* Continue Shopping */}
            <Link to="/" className="continue-shopping">Continue shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

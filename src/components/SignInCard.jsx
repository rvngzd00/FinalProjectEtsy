import React from 'react';
import '../assets/style/SignInCard.css';

const SignInCard = ({ onClose }) => {
  return (
    <div className="signin-overlay" onClick={onClose}>
      <div className="signin-card" onClick={(e) => e.stopPropagation()}>
        <button className="signin-close" onClick={onClose}>&times;</button>
        <h2>Sign in</h2>

        <input type="email" placeholder="Email address" className="signin-input" />
        <input type="password" placeholder="Password" className="signin-input" />

        <div className="signin-row">
          <label className="signin-checkbox-label">
            <input type="checkbox" className="signin-checkbox" /> Stay signed in
          </label>
          <a href="#" className="signin-link">Forgot your password?</a>
        </div>

        <button className="signin-button">Sign in</button>

        <a href="#" className="signin-link signin-trouble">Trouble signing in?</a>

        <div className="signin-divider">OR</div>

        <button className="signin-social">
          <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />
          Continue with Google
        </button>

        <button className="signin-social">
          <img src="https://img.icons8.com/color/24/facebook-new.png" alt="Facebook" />
          Continue with Facebook
        </button>

        <button className="signin-social">
          <img src="https://img.icons8.com/ios-filled/24/mac-os.png" alt="Apple" />
          Continue with Apple
        </button>

        <div className="signin-legal">
            By clicking Sign in, Continue with Google, Facebook, or Apple, you agree to Etsy's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.<br /><br />
            Etsy may send you communications; you may change your preferences in your account settings. We'll never post without your permission.
        </div>
      </div>
    </div>
  );
};

export default SignInCard;

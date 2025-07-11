import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import '../assets/style/Footer.css';

export default function Footer() {
  return (<>

    <div className="footer">
      {/* NewsLetterSubscripsion */}

      <div className="newsletter-section">
        <div className="container">
          <p className="newsletter-text">
            Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on Etsy.
          </p>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* Info Section */}
      <div className="footer-app-info">
        <div className="footer-app-info-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 96 96' aria-hidden="true" focusable="false">
            <path d="M60.1 38H49v11h-2V38H35.9c1.931 9.368 6.626 17 12.1 17 5.474 0 10.171-7.632 12.1-17zm-25.145-9.5c-.003 2.511.19 5.019.577 7.5H47V18.522l-10.925.238a41.683 41.683 0 00-1.12 9.74zM47 2.31c-4.1 1.24-8.18 7.168-10.38 14.437L47 16.52V2.31z"></path>
            <path d="M57.52 9.45l1.784-.9a31.775 31.775 0 012.558 7.65l9.117-.2.042 2-8.78.19c.55 3.41.818 6.857.8 10.31a50.836 50.836 0 01-.54 7.5H72v2h-9.846c-1.6 8.2-5.244 15.053-9.862 17.754C66.834 54.079 76 43.793 76 28.589c0-8.962-2.958-16.353-8.554-21.373A25.424 25.424 0 0049 1.04v15.438l10.83-.236a29.32 29.32 0 00-2.31-6.791zM43.51 55.643c-4.525-2.78-8.086-9.564-9.665-17.643H24v-2h9.5a50.84 50.84 0 01-.549-7.5 43.776 43.776 0 011.075-9.7l-9.009.2-.042-2 9.562-.208c1.89-6.667 5.317-12.436 9.432-15.143C29.71 4.412 20 15.13 20 28.589a27.636 27.636 0 0023.51 27.054z"></path>
            <path d="M61.045 28.5a60.27 60.27 0 00-.818-10.265L49 18.479v17.52h11.468c.388-2.48.58-4.988.577-7.5zM91.7 60c-2.182 4.525-5.734 8.62-10.832 13.719l-1.414-1.414c6.6-6.6 10.511-11.424 12.08-17.7.072-.415.137-.832.215-1.278.607-3.48.262-5.951-1.027-6.068-.72-.066-1.559.68-1.947 2.3a30.158 30.158 0 01-2.454 8.148c-1.78 4.663-8.575 11.048-8.865 11.318l-1.366-1.461c.068-.063 6.8-6.391 8.381-10.62l.061-.133a30.644 30.644 0 002.526-9.148c.11-1.886.095-6.433-1.793-6.552-2.085-.132-2.537 3.505-3.367 7.379-.259 1.21-.89 3.456-1.153 4.243a1.55 1.55 0 01-.09.177c-1.386 4.053-5.32 7.859-5.515 8.045-2.984 2.983-9.707 9.74-9.707 9.74L64.01 69.3s6.726-6.761 9.727-9.761a28.158 28.158 0 003.064-3.6c.5-.788 1.452-2.646.55-3.572-1.148-1.178-3.287-.648-6.08.748-1.98.992-11.21 7.08-15.384 13.34-1.99 2.985-2.772 8.839-3.042 14.2l13.18 2.724 6.8 1.359a8.92 8.92 0 011-.778c7.075-4.74 14.663-11.833 17.317-16.54 3.566-6.32 1.988-7.52.558-7.42zM52.774 82.673l-.77 10.252 1.993.15.595-7.913 10.616 2.123 3.765.778L70.02 93.2l1.96-.4-.885-4.338 2.592.518.392-1.96-8.447-1.69-12.858-2.657zm-29.242 2.055l6.77-1.354 13.206-2.73c-.27-5.36-1.052-11.214-3.042-14.2-4.173-6.258-13.4-12.347-15.384-13.34-2.793-1.4-4.932-1.925-6.08-.747-.9.926.054 2.784.55 3.572a28.158 28.158 0 003.064 3.6c3 3 9.727 9.76 9.727 9.76l-1.418 1.41s-6.723-6.757-9.707-9.74c-.2-.186-4.129-3.992-5.515-8.045a1.74 1.74 0 01-.09-.177c-.263-.787-.894-3.033-1.153-4.243-.83-3.874-1.282-7.511-3.367-7.38-1.888.12-1.9 4.667-1.793 6.553a30.645 30.645 0 002.526 9.148l.061.133c1.58 4.229 8.313 10.557 8.381 10.62L18.9 69.034c-.29-.27-7.084-6.655-8.865-11.318a30.16 30.16 0 01-2.454-8.148c-.388-1.622-1.226-2.37-1.947-2.3-1.287.114-1.634 2.586-1.025 6.065.078.446.143.863.215 1.278C6.394 60.883 10.3 65.7 16.9 72.307l-1.41 1.414c-5.1-5.1-8.65-9.194-10.832-13.72-1.434-.104-3.013 1.1.553 7.42 2.654 4.706 10.238 11.8 17.321 16.529a8.92 8.92 0 011 .778zm7.175.605l-8.433 1.687.393 1.96 2.591-.518-.885 4.338 1.96.4 1.047-5.137 3.75-.775 10.631-2.126.595 7.913 1.994-.15-.77-10.252-12.873 2.66z"></path>
          </svg>
        </div>
        <p>Etsy is powered by 100% renewable electricity.</p>
      </div>
      {/* Main Section  */}
      <div className="footer-main">
        <div className="footer-app-section">
          <div className="footer-app-logo">
            <span className="footer-app-logo-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 24" aria-hidden="true" focusable="false">
                <path d="M6.5 3.1v6s2.1 0 3.2-.1c.6.1 1.1-.3 1.2-.9.1-.1.1-.1.1-.2l.3-1.3h1l-.2 2.8.1 2.9h-1l-.2-1.1c-.1-.6-.6-1.1-1.2-1.1C9 10 6.5 10 6.5 10v5c0 1 .5 1.4 1.6 1.4h3.4c1.2.2 2.4-.5 2.8-1.6l.9-2h.8c-.1.4-.5 4-.6 4.8 0 0-3.1-.1-4.4-.1H5.2l-3.5.1v-.9l1.1-.2c.9-.1 1.2-.3 1.2-1 0 0 .1-2.2.1-5.9S4 3.9 4 3.9c0-.8-.3-.9-1.1-1.1l-1.1-.2v-.9l3.4.1h6.5c1.3 0 3.5-.2 3.5-.2s-.1 1.3-.2 4.5h-.9L13.8 5c-.3-1.5-.8-2.2-1.7-2.2H7c-.5 0-.5.1-.5.3zm13.2.7h1v3.4L24 7l-.2 1.5-3.2-.2v6c0 1.7.6 2.4 1.5 2.4.7 0 1.4-.3 1.8-.9l.5.6c-.6 1.1-1.9 1.8-3.2 1.7-1.5.1-2.8-1-2.9-2.5V8.4h-1.9v-.8c1.6-.2 2.8-1.2 3.3-3.8zm7 10.4l.6 1.5c.3.9 1.2 1.4 2.1 1.3 1.4 0 2-.7 2-1.6 0-2.8-5.4-2-5.4-5.7 0-2.1 1.7-3.1 3.9-3.1 1.1 0 2.1.2 3.2.5-.2.9-.2 1.8-.2 2.7l-.9.1-.6-1.6c-.4-.5-1-.8-1.6-.7-1 0-2 .4-2 1.5 0 2.5 5.6 2 5.6 5.7 0 2.1-1.9 3.2-4.1 3.2-1.2 0-2.3-.3-3.4-.7.1-1 .1-2.1 0-3.1h.8zM33 22c.2-1 .4-2 .6-3.1l.9-.1.3 1.7c.1.5.5.8 1 .7 1.1 0 2.4-.6 3.7-2.9-.6-1.4-2.3-5.8-3.8-9.3-.4-.9-.5-1-1-1.1l-.4-.2V7l2.4.1 3-.2v.8l-.7.2c-.4 0-.8.3-.8.7 0 .1 0 .2.1.3.2.5 1.5 4.1 2.4 6.6.8-1.7 2.4-5.5 2.6-6.2.1-.2.1-.4.2-.6 0-.4-.4-.8-.8-.8l-.7-.1v-.9l2.3.1 2.1-.1v.8l-.4.4c-.6.1-1 .5-1.2 1.1l-3.6 8.4c-2.1 4.8-4.3 5.2-5.9 5.2-.8-.1-1.6-.3-2.3-.8z">

                </path>
              </svg>
            </span>

          </div>
          <button className="footer-download-button">
            Download the Etsy App
          </button>
        </div>
        
        {/* Footer Columns */}
        <div className="footer-columns">
          <div className="footer-column">
            <div className="footer-column-title">Shop</div>
            <div className="footer-column-links">
              <Link to="/gift-cards" className="footer-link">Gift cards</Link><br />
              <Link to="/registry" className="footer-link">Etsy Registry</Link><br />
              <Link to="/sitemap" className="footer-link">Sitemap</Link><br />
              <Link to="/blog" className="footer-link">Etsy blog</Link><br />
              <Link to="/uk" className="footer-link">Etsy United Kingdom</Link><br />
              <Link to="/de" className="footer-link">Etsy Germany</Link><br />
              <Link to="/ca" className="footer-link">Etsy Canada</Link>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-column-title">Sell</div>
            <div className="footer-column-links">
              <Link to="/sell" className="footer-link">Sell on Etsy</Link><br />
              <Link to="/teams" className="footer-link">Teams</Link><br />
              <Link to="/forums" className="footer-link">Forums</Link><br />
              <Link to="/affiliates" className="footer-link">Affiliates & Creators</Link>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-column-title">About</div>
            <div className="footer-column-links">
              <Link to="/about" className="footer-link">Etsy, Inc.</Link><br />
              <Link to="/policies" className="footer-link">Policies</Link><br />
              <Link to="/investors" className="footer-link">Investors</Link><br />
              <Link to="/careers" className="footer-link">Careers</Link><br />
              <Link to="/press" className="footer-link">Press</Link><br />
              <Link to="/impact" className="footer-link">Impact</Link><br />
              <Link to="/legal-imprint" className="footer-link">Legal imprint</Link>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-column-title">Help</div>
            <div className="footer-column-links">
              <Link to="/help" className="footer-link">Help Center</Link><br />
              <Link to="/privacy-settings" className="footer-link">Privacy settings</Link>
            </div>
            <div className="footer-social-icons">
              <a href="https://instagram.com/etsy" target='blank' className="footer-social-icon">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12,5.447c2.136,0,2.389,0.008,3.233,0.047c0.78,0.036,1.204,0.166,1.485,0.275c0.373,0.145,0.64,0.318,0.92,0.598 c0.28,0.28,0.453,0.546,0.598,0.92c0.11,0.282,0.24,0.706,0.275,1.485c0.038,0.844,0.047,1.097,0.047,3.233 s-0.008,2.389-0.047,3.233c-0.036,0.78-0.166,1.204-0.275,1.485c-0.145,0.373-0.318,0.64-0.598,0.92 c-0.28,0.28-0.546,0.453-0.92,0.598c-0.282,0.11-0.706,0.24-1.485,0.275c-0.843,0.038-1.096,0.047-3.233,0.047 s-2.389-0.008-3.233-0.047c-0.78-0.036-1.204-0.166-1.485-0.275c-0.373-0.145-0.64-0.318-0.92-0.598 c-0.28-0.28-0.453-0.546-0.598-0.92c-0.11-0.282-0.24-0.706-0.275-1.485c-0.038-0.844-0.047-1.097-0.047-3.233 S5.45,9.616,5.488,8.773c0.036-0.78,0.166-1.204,0.275-1.485c0.145-0.373,0.318-0.64,0.598-0.92c0.28-0.28,0.546-0.453,0.92-0.598 c0.282-0.11,0.706-0.24,1.485-0.275C9.611,5.455,9.864,5.447,12,5.447 M12,4.005c-2.173,0-2.445,0.009-3.298,0.048 C7.85,4.092,7.269,4.227,6.76,4.425C6.234,4.63,5.787,4.903,5.343,5.348C4.898,5.793,4.624,6.239,4.42,6.765 c-0.198,0.509-0.333,1.09-0.372,1.942C4.009,9.56,4,9.833,4,12.005c0,2.173,0.009,2.445,0.048,3.298 c0.039,0.852,0.174,1.433,0.372,1.942c0.204,0.526,0.478,0.972,0.923,1.417c0.445,0.445,0.891,0.718,1.417,0.923 c0.509,0.198,1.09,0.333,1.942,0.372c0.853,0.039,1.126,0.048,3.298,0.048s2.445-0.009,3.298-0.048 c0.852-0.039,1.433-0.174,1.942-0.372c0.526-0.204,0.972-0.478,1.417-0.923c0.445-0.445,0.718-0.891,0.923-1.417 c0.198-0.509,0.333-1.09,0.372-1.942C19.991,14.45,20,14.178,20,12.005s-0.009-2.445-0.048-3.298 c-0.039-0.852-0.174-1.433-0.372-1.942c-0.204-0.526-0.478-0.972-0.923-1.417c-0.445-0.445-0.891-0.718-1.417-0.923 c-0.509-0.198-1.09-0.333-1.942-0.372C14.445,4.014,14.173,4.005,12,4.005L12,4.005z"></path><path d="M12,7.897c-2.269,0-4.108,1.839-4.108,4.108S9.731,16.113,12,16.113s4.108-1.839,4.108-4.108S14.269,7.897,12,7.897z  M12,14.672c-1.473,0-2.667-1.194-2.667-2.667S10.527,9.339,12,9.339s2.667,1.194,2.667,2.667S13.473,14.672,12,14.672z"></path><circle cx="16.27" cy="7.735" r="0.96"></circle></svg>
                </span>
              </a>
              <a href="https://facebook.com/etsy" target='blank' className="footer-social-icon">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20,5V19a1.007,1.007,0,0,1-1,1H15V13.776h2l0.336-2.3H15V9.659a0.912,0.912,0,0,1,1-1.031h1.5V6.55a11.284,11.284,0,0,0-1.641-.109c-2.2,0-3.3,1.219-3.3,3.039v1.992h-2v2.3h2V20H5a1.007,1.007,0,0,1-1-1V5A1.007,1.007,0,0,1,5,4H19A1.007,1.007,0,0,1,20,5Z"></path></svg>
                </span>
              </a>
              <a href="https://pinterest.com/etsy" target='blank' className="footer-social-icon">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3c-4.97 0-9 4.03-9 9 0 3.813 2.372 7.072 5.72 8.384-.08-.712-.15-1.807.03-2.585.164-.703 1.056-4.475 1.056-4.475s-.27-.54-.27-1.336c0-1.252.726-2.187 1.63-2.187.768 0 1.14.577 1.14 1.268 0 .773-.493 1.928-.746 2.998-.212.896.45 1.626 1.333 1.626 1.6 0 2.83-1.687 2.83-4.12 0-2.156-1.55-3.663-3.76-3.663-2.56 0-4.064 1.922-4.064 3.907 0 .773.297 1.603.67 2.054.073.09.083.168.06.26-.067.283-.22.895-.25 1.02-.038.165-.13.2-.3.12-1.124-.523-1.827-2.167-1.827-3.487 0-2.84 2.063-5.446 5.947-5.446 3.122 0 5.548 2.225 5.548 5.198 0 3.102-1.956 5.598-4.67 5.598-.912 0-1.77-.474-2.063-1.033l-.56 2.14c-.204.78-.753 1.76-1.12 2.358.842.26 1.737.402 2.665.402 4.97 0 9-4.03 9-9s-4.03-9-9-9"></path></svg>
                </span>
              </a>
              <a href="https://youtube.com/etsy" target='blank' className="footer-social-icon">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20,12c0,5.664,0,5.664-8,5.664s-8,0-8-5.664,0-5.664,8-5.664S20,6.333,20,12Zm-5,0L10,9v6Z"></path></svg>
                </span>
              </a>

            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="footer-bottom-bg">
        <div className="container">
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12,2A10,10,0,1,0,22,12,10.012,10.012,0,0,0,12,2ZM9,18.883v0.528A7.938,7.938,0,0,1,4.06,11.06l3.385,3.385a2.967,2.967,0,0,0,1.649,4.4ZM17.5,15a2.509,2.509,0,0,0,.5-0.05V15a0.992,0.992,0,0,0,.927.985A8,8,0,0,1,12,20c-0.216,0-.427-0.016-0.639-0.032l1.254-2.5-0.015.006A2.968,2.968,0,0,0,13,16a2.988,2.988,0,0,0-5-2.221V11H9a1,1,0,0,0,1-1V9a1,1,0,0,0,1-1,1,1,0,0,0,0-2H6.726A7.9,7.9,0,0,1,14,4.263V6a1,1,0,0,0,2,0V5.082a8.047,8.047,0,0,1,2,1.649V7H17a1,1,0,0,0,0,2h2.411a7.941,7.941,0,0,1,.326,1H17a2.556,2.556,0,0,0-2,2.5A2.5,2.5,0,0,0,17.5,15Z"></path>
              </svg>
              Azerbaijan&nbsp; | &nbsp;English (US)&nbsp; | &nbsp;$ (USD)
            </div>
            <div className="footer-bottom-right">
              <span>© 2025 Etsy, Inc.</span>
              <Link to="/terms" className="footer-bottom-link">Terms of Use</Link>
              <Link to="/privacy" className="footer-bottom-link">Privacy</Link>
              <Link to="/interest-based-ads" className="footer-bottom-link">Interest-based ads</Link>
              <Link to="/local-shops" className="footer-bottom-link">Local Shops</Link>
              <Link to="/regions" className="footer-bottom-link">Regions</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
} 
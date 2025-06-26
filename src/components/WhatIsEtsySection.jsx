import React from 'react';
import '../assets/style/WhatIsEtsySection.css';

const WhatIsEtsySection = () => {
  return (
      <div className="container">
        <div className="what-is-etsy-content">
          <h2 className="what-is-etsy-title">
            What is Etsy?
          </h2>
          <a
            href="/about"
            className="what-is-etsy-story-link"
          >
            Read our wonderfully weird story
          </a>

          <div className="what-is-etsy-columns">
            <div className="what-is-etsy-column">
              <h3 className="what-is-etsy-column-title">
                A community doing good
              </h3>
              <p className="what-is-etsy-column-text">
                Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We're also a community pushing for positive change for small businesses, people, and the planet.
                <a className="what-is-etsy-column-link">
                  Here are some of the ways we're making a positive impact, together.
                </a>
              </p>
            </div>
            <div className="what-is-etsy-column">
              <h3 className="what-is-etsy-column-title">
                Support independent creators
              </h3>
              <p className="what-is-etsy-column-text">
                There's no Etsy warehouse - just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.
              </p>
            </div>
            <div className="what-is-etsy-column">
              <h3 className="what-is-etsy-column-title">
                Peace of mind
              </h3>
              <p className="what-is-etsy-column-text">
                Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.
              </p>
            </div>
          </div>

          <div className="what-is-etsy-help-section">
            <h4 className="what-is-etsy-help-title">
              Have a question? Well, we've got some answers.
            </h4>
            <a
              href="https://www.etsy.com/help?ref=hp_what_is_etsy_help_center"
              className="what-is-etsy-help-button"
            >
              Go to Help Center
            </a>
          </div>
        </div>
      </div>
  );
};

export default WhatIsEtsySection; 
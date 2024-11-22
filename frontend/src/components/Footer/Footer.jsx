import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  const navigate = useNavigate();

  // Scroll to the top of the page
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation to different routes
  const handleNavigation = (path) => {
    navigate(path);
    handleScrollToTop(); // Scroll to top after navigation
  };

  // Open external links in a new tab
  const openLink = (url) => {
    window.open(url, '_blank'); // Open in a new tab
  };

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img
            src={assets.logo}
            alt="Quickzee Logo"
            className="footer-logo"
            onClick={handleScrollToTop} // Scroll to top on logo click
            style={{ cursor: 'pointer' }}
          />
          <p>
            Saviruchi is your go-to app for making every celebration unforgettable! 
            From custom functions to grand weddings and vibrant festivals, we deliver 
            everything you need right on time. Say goodbye to stress and hello to effortless planning with Quickzee!
          </p>
          <div className="footer-social-icons">
            <img
              src={assets.facebook_icon}
              alt="Facebook"
              onClick={() => openLink('https://www.facebook.com')}
              style={{ cursor: 'pointer' }}
            />
            <img
              src={assets.twitter_icon}
              alt="Twitter"
              onClick={() => openLink('https://www.twitter.com')}
              style={{ cursor: 'pointer' }}
            />
            <img
              src={assets.linkedin_icon}
              alt="LinkedIn"
              onClick={() => openLink('https://www.linkedin.com')}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li onClick={handleScrollToTop}>Home</li>
            <li onClick={() => handleNavigation('/about-us')}>About us</li>
            <li onClick={() => handleNavigation('/delivery')}>Delivery</li>
            <li onClick={() => handleNavigation('/privacy-policy')}>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 7899079334</li>
            <li>+91 6363649835</li>
            <li>+91 8296111952</li>
            <li>contact@saviruchi.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Saviruchi.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;

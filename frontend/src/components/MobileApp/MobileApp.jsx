    import React from 'react';
    import './MobileApp.css';
    import googleplay from './Screenshot 2024-11-18 004004.png'
    import apple from './Screenshot 2024-11-18 004107.png' // Assuming you have the assets like app icons

    function MobileApp() {
    return (
        <div className="mobile-app-container">
        <header className="mobile-app-header">
            <h2>Get Our Mobile App</h2>
          
            <p>Experience the best of our platform, now in your pocket! Download the app and enjoy exclusive features.</p>
        </header>

        {/* App Features Section */}
        <section className="app-features">
            <h3>Why Download Our App?</h3>
            <div className="feature-list">
            <div className="feature">
                
                <p>Browse Products Effortlessly</p>
            </div>
            <div className="feature">
            
                <p>Secure Payment Methods</p>
            </div>
            <div className="feature">
            
                <p>Order Tracking</p>
            </div>
            <div className="feature">
            
                <p>Exclusive Offers & Discounts</p>
            </div>
            </div>
        </section>

        <section className="download-section">
            <h3>Download the App Now</h3>
            <p>Get access to all our features and enjoy seamless shopping. Available for both iOS and Android devices.</p>
            <div className="download-buttons">
            <a href="https://www.apple.com/app-store/" className="download-btn apple-btn">
                <img src={apple} alt="App Store" />
                <span>Download on the App Store</span>
            </a>
            <a href="https://play.google.com/store" className="download-btn google-btn">
                <img src={googleplay} alt="Google Play" />
                <span>Get it on Google Play</span>
            </a>
            </div>
        </section>
        </div>
    );
    }

    export default MobileApp;

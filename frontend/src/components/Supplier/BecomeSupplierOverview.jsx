import React from 'react';
import { Link } from 'react-router-dom';
import './BecomeSupplier.css';

const BecomeSupplierOverview = () => {
  return (
    <div className="become-supplier-container">
      <h2>Become a Vendor/Supplier</h2>
      <p>Join our platform and grow your business by reaching millions of customers worldwide. Our easy-to-use platform offers amazing tools to help you sell online with ease!</p>
      
      <div className="benefits">
        <h3>Benefits of Selling on Our Platform:</h3>
        <ul>
          <li><strong>Global Reach:</strong> Reach millions of customers worldwide.</li>
          <li><strong>Secure Payments:</strong> Safe and fast payment processing.</li>
          <li><strong>Marketing Tools:</strong> Access to powerful tools for promotions.</li>
          <li><strong>Customer Support:</strong> 24/7 support to assist with any issues.</li>
        </ul>
      </div>

      <p>Ready to get started? Follow the steps below to become a part of our supplier program.</p>
      
      <Link to="/supplier/eligibility" className="btn">Next: Eligibility</Link>
    </div>
  );
};

export default BecomeSupplierOverview;

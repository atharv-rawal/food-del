import React from 'react';
import { Link } from 'react-router-dom';
import './BecomeSupplier.css';

const TermsConditions = () => {
  return (
    <div className="terms-container">
      <h2>Terms & Conditions</h2>
      <p>By applying to become a supplier, you agree to the following terms:</p>
      <ul>
        <li><strong>Platform Rules:</strong> You must follow the rules and guidelines provided by our platform.</li>
        <li><strong>Product Authenticity:</strong> All products listed must be authentic and legal.</li>
        <li><strong>Payment Fees:</strong> The platform charges a commission on each successful sale.</li>
        <li><strong>Data Protection:</strong> You agree to our privacy policy and data usage rules.</li>
      </ul>

      <Link to="/supplier/success" className="btn">Agree & Submit</Link>
    </div>
  );
};

export default TermsConditions;

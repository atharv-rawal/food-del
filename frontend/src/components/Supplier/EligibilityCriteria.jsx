import React from 'react';
import { Link } from 'react-router-dom';
import './BecomeSupplier.css';

const EligibilityCriteria = () => {
  return (
    <div className="eligibility-container">
      <h2>Eligibility Criteria</h2>
      <p>Before registering as a vendor, make sure you meet the following criteria:</p>
      <ul>
        <li><strong>Registered Business:</strong> You must have a registered business entity with relevant licenses.</li>
        <li><strong>Business License:</strong> A valid business license and tax ID are required.</li>
        <li><strong>Product Compliance:</strong> Ensure that your products comply with local laws and platform policies.</li>
        <li><strong>Shipping Capability:</strong> You must have the ability to ship products securely and timely.</li>
      </ul>

      <Link to="/supplier/registration" className="btn">Next: Register</Link>
    </div>
  );
};

export default EligibilityCriteria;

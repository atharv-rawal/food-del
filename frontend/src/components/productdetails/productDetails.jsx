import React from 'react';
import { useLocation } from 'react-router-dom';

import './Productdetails.css'
const ProductDetails = () => {
  const { state } = useLocation(); // Access passed state
  const { id, name, price, description, image } = state || {}; // Destructure product details

  return (
    <div className="product-details">
      <img src={image} alt={name} className="product-img" />
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Price: ₹ {price}</p>
      <button className="purchase-btn">Purchase</button>
    </div>
  );
};

export default ProductDetails;

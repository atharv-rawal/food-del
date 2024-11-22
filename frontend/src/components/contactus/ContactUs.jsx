import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [activeIndex, setActiveIndex] = useState(null); // Track the active Q&A item

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle form submission, like calling an API
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', message: '' }); // reset form
  };

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle Q&A answer visibility
  };

  const qaData = [
    { question: "How can I contact customer support?", answer: "You can contact customer support by filling out the form above or sending an email to support@company.com." },
    { question: "What are your business hours?", answer: "Our business hours are Monday to Friday, 9 AM to 6 PM (PST)." },
    { question: "How can I become a supplier?", answer: "You can apply to become a supplier by visiting our 'Become Supplier' page or by reaching out through the form." },
    { question: "Do you offer international shipping?", answer: "Yes, we offer international shipping to most countries. Please check our shipping policy for more details." },
    { question: "What payment methods do you accept?", answer: "We accept credit cards, PayPal, and other secure payment methods. Please see our payment options on the checkout page." },
    { question: "Can I track my order?", answer: "Yes, once your order is shipped, you will receive a tracking number via email to monitor your package." },
    { question: "How do I return an item?", answer: "You can return an item by following our return policy, which is available on the 'Returns' page. Please contact support if you need assistance." },
    { question: "Do you offer gift cards?", answer: "Yes, we offer digital gift cards. You can purchase them on our website." },
    { question: "Are your products eco-friendly?", answer: "Many of our products are made from sustainable materials. Please check the product details for eco-friendly certifications." },
    { question: "How can I change my order after it's been placed?", answer: "Once an order is placed, it can only be modified within a short time frame. Please contact customer support immediately if you need assistance." },
    { question: "How can I unsubscribe from your newsletter?", answer: "You can unsubscribe by clicking the 'unsubscribe' link at the bottom of any of our newsletter emails." },
    { question: "Do you offer a loyalty program?", answer: "Yes, we offer a loyalty program for our frequent customers. Sign up on our website to start earning points!" },
    { question: "What should I do if I forgot my password?", answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page." },
    { question: "Can I cancel my order?", answer: "Orders can be canceled within a short time after being placed. Please contact customer support to check if your order can be canceled." },
    { question: "How can I update my account details?", answer: "You can update your account details by logging into your account and navigating to the 'Account Settings' section." },
    { question: "Where can I find your terms and conditions?", answer: "Our terms and conditions are available at the bottom of our website in the footer section." },
    { question: "What is your refund policy?", answer: "Our refund policy allows you to return most items within 30 days for a full refund. Please refer to our return policy for more details." },
    { question: "Do you offer any discounts?", answer: "We occasionally offer discounts and promotions. Please subscribe to our newsletter for the latest offers." },
    { question: "Can I make changes to my subscription plan?", answer: "Yes, you can change your subscription plan by logging into your account and selecting a different plan from the 'Subscription' page." },
    { question: "Do you sell wholesale?", answer: "Yes, we offer wholesale pricing for bulk purchases. Please contact our sales team for more information." }
  ];

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p className="form-description">We would love to hear from you. Please fill out the form below and we'll get back to you as soon as possible!</p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message here"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      {/* Q&A Section */}
      <div className="qa-section">
        <h3>Frequently Asked Questions</h3>

        {qaData.map((item, index) => (
          <div key={index} className="qa-item">
            <div className="qa-question" onClick={() => toggleAnswer(index)}>
              <strong>{`Q${index + 1}: ${item.question}`}</strong>
            </div>
            {activeIndex === index && (
              <div className="qa-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactUs;

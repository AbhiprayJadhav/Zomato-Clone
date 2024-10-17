import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [focus, setFocus] = useState({
    help: false,
    name: false,
    email: false,
    mobile: false,
    text: false,
  });

  const handleFocus = (field) => {
    setFocus({ ...focus, [field]: true });
  };

  const handleBlur = (field, value) => {
    setFocus({ ...focus, [field]: !!value });
  };

  return (
    <div className="contact-container">
      <div className="image-container">
        <img
          src="/contact/Contact-background.jpeg"
          alt="Banner"
          className="contact-image"
        />
        {/* Add text overlay here */}
        <div className="image-overlay">
          <h1>Get in Touch with Us!</h1>
          <p>We'd love to hear from you</p>
        </div>
      </div>

      <div className="main-content">
        <form className="floating-form">
          <div className={`form-group ${focus.help ? 'focused' : ''}`}>
            <label htmlFor="help">How can we help you? *</label>
            <select
              id="help"
              onFocus={() => handleFocus('help')}
              onBlur={(e) => handleBlur('help', e.target.value)}
            >
              <option value=""></option>
              <option value="order">I need help with my Zomato online order.</option>
              <option value="feedback">I would like to give feedback/suggetions</option>
              <option value="website_error">The website is not working properly</option>
            </select>
          </div>

          <div className={`form-group ${focus.name ? 'focused' : ''}`}>
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              onFocus={() => handleFocus('name')}
              onBlur={(e) => handleBlur('name', e.target.value)}
            />
          </div>

          <div className={`form-group ${focus.email ? 'focused' : ''}`}>
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              onFocus={() => handleFocus('email')}
              onBlur={(e) => handleBlur('email', e.target.value)}
            />
          </div>

          <div className={`form-group ${focus.mobile ? 'focused' : ''}`}>
            <label htmlFor="mobile">Mobile Number (optional)</label>
            <input
              type="tel"
              id="mobile"
              onFocus={() => handleFocus('mobile')}
              onBlur={(e) => handleBlur('mobile', e.target.value)}
            />
          </div>

          <div className={`form-group ${focus.text ? 'focused' : ''}`}>
            <label htmlFor="text">Type text *</label>
            <textarea
              id="text"
              onFocus={() => handleFocus('text')}
              onBlur={(e) => handleBlur('text', e.target.value)}
            ></textarea>
          </div>
        </form>

        <div className="right-side">
          <div className="right-div">
            <h1>Report a Safety Emergency</h1>
            <p>We are commited to the safety of everyone using Zomato</p>
<p style={{color:"red"}}>Report here</p>
          </div>
          <div className="right-div">
            <h1>Issue with your live order?</h1>
            <p>Click on the 'Support' or 'Online ordering help' section in your app to connect to our customer support team.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

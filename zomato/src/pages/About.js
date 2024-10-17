import React from 'react';
import '../styles/About.css'; // Assuming you're using a separate CSS file for styling
import AutoCarousel from './AutoCarousel';

const About = () => {
  return (
    <>
      {/* AutoCarousel Section */}
      <div style={{ marginTop: '100px' }}>
        <AutoCarousel />
      </div>

      {/* Mission Section */}
      <div className="container">
        <div className="mission-container">
          <div className="image-wrapper">
            <img
              src="/about/boy.png"
              alt="Delivery Boy"
              className="delivery-boy-icon"
              style={{ height: '500px', width: '500px' }} // Adjusted size for better layout
            />
          </div>
        </div>
        <div className="mission-content">
          <h1 className="section-title">Mission</h1>
          <p className="section-text">
            Our mission is to elevate the quality of life of the urban consumer by offering
            unparalleled convenience. Convenience is what makes us tick. It's what makes us get out
            of bed and say, "Let's do this."
          <ul className="vision-list">
              <li>Every meal is just a tap away, ensuring unparalleled convenience and quality.</li>
              <li>Restaurants of all sizes have the opportunity to grow their business by reaching wider audiences.</li>
              <li>Delivery partners are empowered with flexible and sustainable livelihood opportunities.</li>
              </ul>
          </p>
        </div>
      </div>

    
      <div className="container">
        <div className="mission-content">
          <h1 className="section-title" style={{ textAlign:"center" }}>Vision</h1>
          <p className="section-text">
            To be the leading global platform that redefines food delivery by providing unparalleled
            convenience and an exceptional culinary experience for urban consumers. We envision a
            world where every meal is just a click away, and where our service enhances the way
            people discover, order, and enjoy food.
            <ul className="vision-list">
              <li>Every meal is just a tap away, ensuring unparalleled convenience and quality.</li>
              <li>Restaurants of all sizes have the opportunity to grow their business by reaching wider audiences.</li>
              <li>Delivery partners are empowered with flexible and sustainable livelihood opportunities.</li>
              </ul>
          </p>
        </div>
        <div className="mission-container">
          <div className="image-wrapper">
            <img
              src="/about/boy rocket.png"
              alt="Delivery Boy on Rocket"
              className="rocket-image"
              style={{ height: '500px', width: '500px' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

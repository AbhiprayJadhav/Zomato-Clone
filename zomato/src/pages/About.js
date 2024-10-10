import React from 'react';
import '../styles/About.css'; // Assuming you're using a separate CSS file for styling

const About = () => {
  return (
    <>
    <div className="container">
      <div className="mission-container">
        <div className="image-wrapper">
          <img src="/boy.png" alt="Delivery Boy" className="delivery-boy-icon" style={{ height: "600px", width: "600px" }} />
        </div>
      </div>
      <div className="mission-content">
        <h1 style={{fontSize:"70px"}}>Mission</h1>
        <p>
          Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience.
          Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."
        </p>
      </div>
    </div>


    <div className="container">
    
      <div className="mission-content">
          <h1 style={{ fontSize: "70px" ,color:""}}>Mission</h1>
        <p>
          Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience.
          Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."
        </p>
        </div>
        <div className="mission-container">
        <div className="image-wrapper">
          <img src="/boy.png" alt="Delivery Boy" className="delivery-boy-icon" style={{ height: "600px", width: "600px" }} />
        </div>
      </div>
      </div>
    </>
  );
};

export default About;

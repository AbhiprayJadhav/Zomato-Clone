import React from 'react';
import RestaurantCard from './RestaurantCard';

const Menu = () => {
  return (
    <>
      <img 
        src="/menuBanner.webp" 
        alt="Menu Banner" 
        style={{
          display: "block", 
          margin: "90px auto", 
          borderRadius: "15px", 
          width: '100%',     
          maxWidth: '1100px', 
          height: 'auto', 
        }} 
      />
      <div style={{ textAlign: 'center', margin: '20px 0', color: '#E23744', marginTop:"100px" }}>
        <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>Get Ready to Indulge!</h1>
        <p style={{ fontSize: '18px', color: '#555', margin: '5px 0' }}>
          Because life is too short to skip dessert... or the main course!
        </p>
        <p style={{ fontSize: '18px', color: '#555', margin: '5px 0' }}>
          We serve food that makes you go "Oh la la!"
        </p>
        <p style={{ fontSize: '18px', color: '#555', margin: '5px 0' }}>
          Good food is like a good lover; it takes time to enjoy!
        </p>
      </div>
      <RestaurantCard />
    </>
  );
};

export default Menu;

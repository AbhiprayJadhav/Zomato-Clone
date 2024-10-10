import React from 'react';
import { Box } from '@mui/material';

const HeroSection = () => {
  return (
    <Box className="hero-section">
      {/* Background Image */}
      <Box
        sx={{
          backgroundImage: `url('/Herosec.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        {/* Zomato Logo */}
        <Box sx={{ marginTop: 4 }}>
          <img src="/Zomato.svg" alt="Zomato Logo Large" style={{ width: '300px' }} />
        </Box>

        {/* Slogan Section */}
        <Box sx={{ color: 'white', textAlign: 'center', marginTop: 2 }}>
          <h2 style={{
            fontSize: 30,
            
            color: 'white',
            textShadow: "black",
            marginBottom: '0.5rem'
          }}>
            Discover the best food & drinks here...
          </h2>

          <h3 style={{ fontSize: '1.5rem', color: '#ffcc00', fontStyle: 'italic' }}>
            Want it? Order it!
          </h3>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;

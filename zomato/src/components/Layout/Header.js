import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/Header.css";
const Header = () => {
  const [mobOpen, setMobOpen] = useState(false);

  // Handle Menu Click
  const handleDrawerOpen = () => {
    setMobOpen(!mobOpen);
  };

  // Menu Drawer
  const drawer = (
    <Box onClick={handleDrawerOpen} sx={{ textAlign: 'left', padding: 2, width: 250 }}>
      {/* Zomato Logo */}
      <Box sx={{ marginBottom: 2 }}>
        <img src="/Zomato.svg" alt="Zomato Logo" style={{ width: '150px' }} />
      </Box>

      {/* Navigation Menu */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/" >
            Home
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/menu" >
            Menu
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/about" >
            About
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/contact" >
            Contact
          </Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <Box sx={{
      backgroundImage: `url('/pexels-chanwalrus-958545.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '500px', // Adjust the height as needed
      display: 'flex',
      flexDirection: 'column', // Stack content vertically
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      {/* Zomato Header */}
      <AppBar component="nav" sx={{ bgcolor: "rgba(0, 0, 0, 0.7)" }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Zomato Logo (First - Aligned to the left) */}
          <Box>
            <img src="/Zomato.svg" alt="Zomato Logo" style={{ width: '120px' }} />
          </Box>

          {/* Menu Icon for small screens */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ display: { sm: "none" } }} // Only show on small screens
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>

          {/* Navigation Menu for Large Screens */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul style={{
              display: 'flex',
              gap: '20px',
              margin: 0,
              padding: 25,
              listStyleType: 'none',
              alignItems: 'center'
            }}>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/menu" >Menu</Link>
              </li>
              <li>
                <Link to="/about" >About</Link>  </li>
              <li>
                <Link to="/contact" >Contact</Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>

      
      <Box sx={{ marginTop: 4 }}>
        <img src="/Zomato.svg" alt="Zomato Logo Large" style={{ width: '300px' }} />
      </Box>

      {/* Slogan Section */}
      <Box sx={{ color: 'white', textAlign: 'center', marginTop: 2 }}>
        <h2 style={{
          fontSize: '2rem',
          color: '#ffffff',
          marginBottom: '0.5rem',
        }}>Discover the best food & drinks in Chhindwara</h2>
        <h3 style={{
          fontSize: '1.5rem',
          color: '#ffcc00', // Add contrast with yellow
          fontStyle: 'italic',
        }}>Want it? Order it!</h3>
      </Box>

      {/* Drawer for Mobile Veiw */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobOpen}
          onClose={handleDrawerOpen}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;

  
import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [mobOpen, setMobOpen] = useState(false);

  // Handle Menu Click
  const handleDrawerOpen = () => {
    setMobOpen(!mobOpen);
  };

  // Menu Drawer
  const drawer = (
    <Box onClick={handleDrawerOpen} sx={{ textAlign: 'left', padding: 2, width: 250 }}>
      <Box sx={{ marginBottom: 2 }}>
        <img src="/Zomato.svg" alt="Zomato Logo" style={{ width: '150px' }} />
      </Box>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/menu">Menu</Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/about">About</Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <div className="navbar">
    <AppBar component="nav" sx={{ bgcolor: "rgba(0, 0, 0, 0.7)" }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Zomato Logo */}
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
            <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/menu" style={{ color: 'white', textDecoration: 'none' }}>Menu</Link></li>
            <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
            <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
          </ul>
        </Box>
      </Toolbar>

      {/* Drawer for Mobile Navigation */}
      <Drawer style={{ backgroundColor:"#1c1c1c"}}
        variant="temporary"
        open={mobOpen}
        onClose={handleDrawerOpen}
        sx={{ display: { xs: 'block', sm: 'none' } }}
      >
        {drawer}
      </Drawer>
      </AppBar>
    </div>
  );
};

export default Navbar;

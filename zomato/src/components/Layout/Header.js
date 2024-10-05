import React, { useState } from 'react';
import { Typography, AppBar, Box, Toolbar, IconButton, Drawer } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {

  const [mobOpen, setMobOpen] = useState(false);

  // Handle Menu Click
  const handleDrawerOpen = () => {
    setMobOpen(!mobOpen);
  };

  // Menu Drawer
  const drawer = (
    <Box onClick={handleDrawerOpen} sx={{ textAlign: 'left', padding: 2, width: 250 }}>
      {/* Logo and Title */}
      <Typography
        color="goldenrod"
        variant="h6"
        component="div"
        sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}
      >
        <FastfoodIcon sx={{ marginRight: 1 }} /> My Restaurant
      </Typography>

      {/* Navigation Menu */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/" style={{ color: 'blue', textDecoration: 'underline', display: 'block' }}>
            Home
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/menu" style={{ color: 'blue', textDecoration: 'underline', display: 'block' }}>
            Menu
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/about" style={{ color: 'blue', textDecoration: 'underline', display: 'block' }}>
            About
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/contact" style={{ color: 'blue', textDecoration: 'underline', display: 'block' }}>
            Contact
          </Link>
        </li>
      </ul>
    </Box>
  );


  return (
    <Box>
      <AppBar component="nav" sx={{ bgcolor: "black" }}>
        <Toolbar>
          {/* Menu Icon for small screens */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{
              mr: 2,
              display: { sm: "none" }, // Only show on small screens
            }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>

          {/* Restaurant Title */}
          <Typography
            color="goldenrod"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <FastfoodIcon /> My Restaurant
          </Typography>

          {/* Navigation Menu for Large Screens */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul style={{
              display: 'flex',
              gap: '20px',
              margin: 0,
              padding: 0,
              listStyleType: 'none',
              alignItems: 'center'
            }}>
              <li>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              </li>
              <li>
                <Link to="/menu" style={{ color: 'white', textDecoration: 'none' }}>Menu</Link>
              </li>
              <li>
                <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
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

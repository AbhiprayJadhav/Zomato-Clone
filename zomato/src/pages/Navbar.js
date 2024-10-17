import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Drawer, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LoginSignUp from './LoginSignUp';

const Navbar = () => {
  const [mobOpen, setMobOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false); // For opening modal
  const [isLogin, setIsLogin] = useState(true); // Control whether to show login or signup

  // Handle Menu Click for Mobile Drawer
  const handleDrawerOpen = () => {
    setMobOpen(!mobOpen);
  };

  // Open Login or Sign Up Dialog
  const handleLoginOpen = () => {
    setIsLogin(true);
    setOpenDialog(true);
  };

  const handleSignUpOpen = () => {
    setIsLogin(false);
    setOpenDialog(true);
  };

  // Close Dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Menu Drawer for small screens
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
          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: 'center' }}>
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

            {/* Login and Sign Up Buttons */}
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', marginLeft: 2 }} onClick={handleLoginOpen}>
              Login
            </Button>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', marginLeft: 2 }} onClick={handleSignUpOpen}>
              Sign Up
            </Button>
          </Box>
        </Toolbar>

        {/* Drawer for Mobile Navigation */}
        <Drawer
          variant="temporary"
          open={mobOpen}
          onClose={handleDrawerOpen}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          {drawer}
        </Drawer>
      </AppBar>

      {/* Dialog for Login and Sign Up */}
      <LoginSignUp
        open={openDialog}
        handleClose={handleCloseDialog}
        isLogin={isLogin}
      />
    </div>
  );
};

export default Navbar;

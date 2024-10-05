import React from 'react';
import { Typography, AppBar, Box, Toolbar, IconButton } from '@mui/material'; // Correct import
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import "../../styles/Header.css";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
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
            <FastfoodIcon /> Restaurant
          </Typography>

          {/* Navigation Menu */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

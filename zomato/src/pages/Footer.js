import React from 'react';
import { Box, Typography, IconButton, Grid, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#1c1c1c', color: 'white', p: 6 }}>
      <Grid container spacing={4}>
        {/* Left Section with Zomato logo */}
        <Grid item xs={12} md={4}>
          <Box>
            <img src="/Zomato.svg" alt="Zomato" style={{ width: '200px' }} />
            <Typography variant="body1" mt={2}>
              Discover the best food and drinks in your city!
            </Typography>
          </Box>
        </Grid>

        {/* Useful Links */}
        <Grid item xs={12} md={2}>
          <Typography variant="h6" gutterBottom>
            Useful Links
          </Typography>
          <Link href="/home" color="inherit" underline="hover">
            Home
          </Link><br />
          <Link href="/menu" color="inherit" underline="hover">
            Menu
          </Link><br />
          <Link href="/about" color="inherit" underline="hover">
            About Us
          </Link><br />
          <Link href="/contact" color="inherit" underline="hover">
            Contact Us
          </Link>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <IconButton href="#" style={{ color: '#3b5998' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton href="#" style={{ color: '#00acee' }}>
            <TwitterIcon />
          </IconButton>
          <IconButton href="#" style={{ color: '#E4405F' }}>
            <InstagramIcon />
          </IconButton>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body1">
            Zomato Pvt Ltd
          </Typography>
          <Typography variant="body2">
            info@zomato.com<br />
            +91 1234567890
          </Typography>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Box textAlign="center" mt={4}>
        <Typography variant="body2" style={{ color: 'gray' }}>
          © 2024 Zomato. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

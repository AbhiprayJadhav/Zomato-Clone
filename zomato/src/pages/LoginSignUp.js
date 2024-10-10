import React, { useState } from "react";
import {
  Box, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, RadioGroup, Radio,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";


const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleFormSwitch = () => setIsLogin(!isLogin);

  const images = [
    "/path-to-your-image1.jpg",
    "/path-to-your-image2.jpg",
    "/path-to-your-image3.jpg",
  ];

  return (
    <Box sx={{ display: "flex", height: "100vh", alignItems: "center" }}>
      {/* Carousel Section */}
      <Box sx={{ width: "50%", height: "100%" }}>
        <img src="/Zomato-logo.png" alt="Zomato Logo" style={{ width: "200px", margin: "20px auto", display: "block" }} />
        <Carousel>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`carousel-${i}`} style={{ width: "100%", height: "100%" }} />
          ))}
        </Carousel>
      </Box>

      {/* Form Section */}
      <Box sx={{ width: "50%", padding: "20px", backgroundColor: "#f5f5f5" }}>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        {isLogin ? (
          <>
            <TextField label="Email" variant="outlined" fullWidth margin="normal" />
            <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
            <Button variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </>
        ) : (
          <>
            <TextField label="Name" variant="outlined" fullWidth margin="normal" />
            <TextField label="Mobile Number" variant="outlined" fullWidth margin="normal" />
            <FormControl component="fieldset">
              <RadioGroup row aria-label="gender" name="gender">
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
            <TextField label="Email" variant="outlined" fullWidth margin="normal" />
            <FormControl fullWidth margin="normal">
              <InputLabel>Food Preference</InputLabel>
              <Select>
                <MenuItem value="vegetarian">Vegetarian</MenuItem>
                <MenuItem value="non-vegetarian">Non-Vegetarian</MenuItem>
                <MenuItem value="both">Both</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </>
        )}

        <Button onClick={handleFormSwitch} sx={{ marginTop: "10px" }}>
          {isLogin ? "Switch to Sign Up" : "Switch to Login"}
        </Button>
      </Box>
    </Box>
  );
};

export default LoginSignUp;

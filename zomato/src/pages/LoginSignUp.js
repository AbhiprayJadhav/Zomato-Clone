import React from "react";
import {
  TextField, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, RadioGroup, Radio, Dialog, DialogContent, DialogTitle, IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Import Close Icon

const LoginSignUp = ({ open, handleClose, isLogin }) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>
        {isLogin ? "Login" : "Sign Up"}
        {/* Cross Icon in top-right corner */}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {isLogin ? (
          <>
            <TextField label="Email" variant="outlined" fullWidth margin="normal" />
            <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
            <Button variant="contained" color="primary" fullWidth sx={{ marginTop: "10px" }}>
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
            <Button variant="contained" color="primary" fullWidth sx={{ marginTop: "10px" }}>
              Sign Up
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoginSignUp;

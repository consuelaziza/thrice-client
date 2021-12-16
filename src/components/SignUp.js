import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import {Container, Typography, Box} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../config';

const theme = createTheme();

function SignUp(props) {

  const navigate = useNavigate()

  const handleSignUp = async (event) => {
    event.preventDefault()
    let newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value
    }
  
    await axios.post(`${API_URL}/signup`, newUser, {withCredentials: true})  
    navigate('/signin')
  } 


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSignUp} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ color: "#F999B7" , backgroundColor:"#FEE3EC"}}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/signin" style={{ color: "#F999B7" }}>
                  {"Already have an account? Sign In instead"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp
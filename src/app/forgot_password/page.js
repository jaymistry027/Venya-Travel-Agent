'use client'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Nav from "../Nav"

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
        <Nav/>
      <Container component="main" maxWidth="500px">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h3" sx={{fontFamily:'Roboto'}}>
            Forgot Password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1,allignItems:'centre' }}>
            <Typography sx={{
                      color: '#696F79',
                      fontSize: '26px',
                      fontWeight: '400',
                      marginBottom: '0.5em',
                      marginTop:'40px'
                    }}>Email Address or User id*</Typography>
                    <TextField
                      sx={{width:'600px',
                    height:'90px'}}
                      required
                    /><br/>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,backgroundColor:'#364D3F',height:'60px',fontSize:'20px'}}
            >
              <Link href='../reset_password' style={{borderRadius: '6px',
 color:'white', textDecoration:'none'}}>
               Get link
              </Link>
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
import { Box } from "@mui/system"
import Nav from "./Nav"
import x from './Images/login-photo.webp'
import { Button, Grid, TextField, Typography } from "@mui/material"
import Image from "next/image"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from "next/link";
import './page1.css'
import './general.css';

<style>
{/* @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); */}
</style>
export default function Home() {
  return (
    <Box >
      <Nav/>
      <Box>
        <Grid container>
          <Grid item lg={6} md ={6} sm={6} >
           <Image className='image' src = {x}
           alt=''
           style={{
            width:'100%',
            height:'100%'
           }}
            />

          </Grid>
          <Grid item lg={6} md={6} xs={12} sm={6} style={{
            // width:'50vw',
            height:'auto',
            // backgroundColor:'red',
            display: 'flex',
            justifyContent: 'center',
            // alignItems: 'center'
            
           }} >
            
              <Grid container style={{
                // alignItems: 'center',
                display: 'flex',
                // justifyContent: 'center',
                // flexDirection: 'column',
                // backgroundColor:'red',
                padding:'9em',
                // width:'40vw',
                height:'auto',
                width:'auto'

              }}>
                {/* <div className="externalContainer"> */}
                    <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center' /*alignItems: 'center'*/ }}>
                    <Typography variant='h3' sx={{ alignContent:'center',alignSelf:'center',
                      fontFamily:'Arial',
                      fontSize:'40px',
                      fontWeight:'700',
                      letterSpacing:'-0.8',
                      marginBottom:'30px'
                      }}>
                      Welcome Partner
                    </Typography>
                    </Grid>
                    
                 
                  <Grid item xs={12}>
                  <hr style={{
                    height: '1px',
                    background: '#F5F5F5',
                    fullWidth:'true',
                    opacity:0.35,
                  }}/>
                  </Grid>
                  
                  <Grid item xs={12}>
                  <Typography sx={{alignSelf:'left',
                  fontSize:'20px',
                  fontFamily: 'Arial', 
                  fontWeight:'400',
                  color:'#696F79',
                  marginTop:'1em'
                  
                }}>
                  Email address or User ID
                  </Typography>
                  </Grid>
                  <Grid item xs={12}>
                  <TextField
                  type='text'
                  required
                  placeholder="Email id"
                  fullWidth
                  />
                  </Grid>
                  <Grid item xs={12} > 
                  <Typography sx={{alignSelf:'left',
                  fontSize:'20px',
                  fontWeight:'400',
                  color:'#696F79',
                  fontFamily:'Arial',
                  marginTop:'10px'
                  
                }}>
                  Password
                  </Typography>
                  </Grid>
                  <Grid item xs={12}>
                  <TextField
                  type='text'
                  placeholder="Password"
                  fullWidth
                  required
                  />
                  </Grid>
                  
                <Grid container sx={{marginTop:'1em'}}>
                  <Grid item xs={6} md ={6} lg={6} >
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                  
                  </FormGroup>
                  </Grid>
                  <Grid item xs={6} md={6} lg={6} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end', // Align content to the extreme right
                    }}>
                    <Link href='./forgot_password' style={{
                      color: '#2C73EB',
                      textDecoration: 'none',
                      float: 'right'
                    }}>Forgot password</Link>
                  </Grid>
                </Grid>
                
                <Grid item xs={12}>
                <Link href='../dashboard'>
                <Button sx={{
                  backgroundColor:'#364D3F',
                  color:'white',
                  height:'auto',
                  fontSize:'18px',
                  fontWeight:'700',
                  marginTop:'1em',
                  borderRadius:'6px',
                  
                }} className='button' fullWidth>Login</Button>
                </Link>
                </Grid>
                
              <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography 
                sx={{
                fontSize:'15px',
                fontWeight:'500',
                color:'#696F79',
                marginTop:'1.5em',
                alignItems:"center",
                alignSelf:'center'
                
              }}>
                Dont have an account?
                <Link href='../RegistrationForm' style={{
                      
                     textDecoration:'none',
                      color:'#2C73EB'
                    }}> Sign up here</Link>
                </Typography>

                </Grid>
                
                {/* </div> */}
                  
                
                
              </Grid>
             
          </Grid>
        </Grid>
      </Box>
    </Box>

    
  )
}

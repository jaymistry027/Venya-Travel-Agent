'use client'
import React from 'react';
import { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import '../general.css'
import Nav from '../Nav'
import Link from 'next/link';
import { Box } from '@mui/system'
import './registrationForm.css';


const steps = ["Step 1", "Step 2", "Step 3"];

export default function RegistrationForm() {
  const [checked, setChecked] = React.useState(false);
  function handleChange(e) {
    setChecked(e.target.checked);
  }

  return (
    
<>
    <Box>
        <Nav/>
        <Box sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            margin: '2px 0'
        }}>
           
            <ul class="stepper" style={{
                listStyle: 'none', 
               
                margin: 40,   /* Reset margin */
            padding: 0,  /* Reset padding */
            }}>
                <li class="stepper__item current">1. Contact Information</li>
                <li class="stepper__item ">2. Bank & other Details</li>
                <li class="stepper__item">3. Upload Documents</li>
                <li class="stepper__item">4. Select Plan</li>
            </ul>
            
        </Box>
        <Grid container direction="column" alignItems="center" spacing={2} className='bankdetails-box1'> 
          <div 
          style={{  padding: 50,height:'auto' }}
          >
            <Grid item xs={12} >

              <>

                <Typography sx={{
                      color: 'black',
                      fontFamily: 'Roboto',
                      fontSize: 25,
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: 1, /* 80% */
                    }}>Contact Details</Typography>
                <Grid container spacing={2} mt='0.5%'>

                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      color: '#696F79',
                      fontSize: '16px',
                      fontWeight: '400',
                      marginBottom: '0.5em'
                    }}>Partner Name*</Typography>
                    <TextField

                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      color: '#696F79',
                      fontSize: '16px',
                      fontWeight: '400',
                      marginBottom: '0.5em'
                    }}>Company Name *</Typography>
                    <TextField

                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      color: '#696F79',
                      fontSize: '16px',
                      fontWeight: '400',
                      marginBottom: '0.5em'
                    }}>Mobile Number*</Typography>
                    <TextField
                      type='numbar'
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      color: '#696F79',
                      fontSize: '16px',
                      fontWeight: '400',
                      marginBottom: '0.5em'
                    }}>Email Id*</Typography>
                    <TextField

                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      color: '#696F79',
                      fontSize: '16px',
                      fontWeight: '400',
                      marginBottom: '0.5em'
                    }}>Whatsapp Number*</Typography>
                    <TextField
                      type='number'
                      fullWidth
                      required
                    />
                     <p style={{ fontSize: 9, padding: 5 }}><input value="test" type="checkbox" style={{ width: 10, height: 10 }} /> Whatsapp No. same as Mobile Number</p>
                  </Grid>

                 



                </Grid><br /><br />
                <Typography sx={{
                      color: 'black',
                      fontFamily: 'Roboto',
                      fontSize: 25,
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: 1, /* 80% */
                    }}>Registered Office Address</Typography>
                <Grid container spacing={2} mt='0.5%'>
                <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      color: '#696F79',
                      fontSize: '16px',
                      fontWeight: '400',
                      marginBottom: '0.5em'
                    }}>Country*</Typography>
                    <TextField

                      fullWidth
                      required
                    />
                  </Grid>
                    
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      color: '#696F79',
                      fontSize: '16px',
                      fontWeight: '400',
                      marginBottom: '0.5em'
                    }}>State/Province*</Typography>
                    <TextField

                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      color: '#696F79',
                      fontSize: '16px',
                      fontWeight: '400',
                      marginBottom: '0.5em'
                    }}>City*</Typography>
                    <TextField

                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      color: '#696F79',
                      fontSize: '16px',
                      fontWeight: '400',
                      marginBottom: '0.5em'
                    }}>Street Address*</Typography>
                    <TextField

                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      color: '#696F79',
                      fontSize: '16px',
                      fontWeight: '400',
                      marginBottom: '0.5em'
                    }}>Main Address*</Typography>
                    <TextField

                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      color: '#696F79',
                      fontSize: '16px',
                      fontWeight: '400',
                      marginBottom: '0.5em'
                    }}>Pincode</Typography>
                    <TextField
                      type='number'
                      fullWidth
                    />
                  </Grid>
                </Grid>

                {checked ? (<p style={{ fontSize: 9, padding: 5 }}>  <input value="test" Checked={true} type="checkbox" onChange={handleChange} style={{ width: 10, height: 10 }} /> Billing address Same as office address</p>) : (
                  <>
                    <br /><br />
                    <Typography sx={{
                      color: 'black',
                      fontFamily: 'Roboto',
                      fontSize: 25,
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: 1, /* 80% */
                    }}>Billing Address</Typography>
                    <Grid container spacing={2} mt='0.5%'>
                <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      color: '#696F79',
                      fontSize: '16px',
                      fontWeight: '400',
                      marginBottom: '0.5em'
                    }}>Country*</Typography>
                    <TextField

                      fullWidth
                      required
                    />
                  </Grid>
                    
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      color: '#696F79',
                      fontSize: '16px',
                      fontWeight: '400',
                      marginBottom: '0.5em'
                    }}>State/Province*</Typography>
                    <TextField

                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      color: '#696F79',
                      fontSize: '16px',
                      fontWeight: '400',
                      marginBottom: '0.5em'
                    }}>City*</Typography>
                    <TextField

                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      color: '#696F79',
                      fontSize: '16px',
                      fontWeight: '400',
                      marginBottom: '0.5em'
                    }}>Street Address*</Typography>
                    <TextField

                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      color: '#696F79',
                      fontSize: '16px',
                      fontWeight: '400',
                      marginBottom: '0.5em'
                    }}>Main Address*</Typography>
                    <TextField

                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      color: '#696F79',
                      fontSize: '16px',
                      fontWeight: '400',
                      marginBottom: '0.5em'
                    }}>Pincode</Typography>
                    <TextField
                      type='number'
                      fullWidth
                    />
                    <p style={{ fontSize: 9, padding: 5 }}>  <input value="test" type="checkbox" onChange={handleChange} style={{ width: 10, height: 10 }} /> Billing address Same as office address</p>
                  </Grid>
                        


                      </Grid>




                  </>
                )}



              </>

            </Grid>
            {/* <Grid container spacing={2} mt='0.5%'>
              <Grid item xs={4}></Grid>
              <Grid item xs={6}>
                <Link href='./bankdetails'>
                            <Button fullWidth className='proceed-button'>Proceed</Button>
                </Link>
                

              </Grid>
            </Grid> */}
            <Grid container justifyContent="center" mt='5em'>

                    <Link href='./bankdetails'>
                            <Button fullWidth className='proceed-button-reg' >p<Typography style={{ textTransform: 'lowercase' , fontFamily: 'Roboto',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal'}}>roceed</Typography></Button>
                </Link>
                </Grid>
          </div>
        </Grid>

      </Box>
    </>
  );
};

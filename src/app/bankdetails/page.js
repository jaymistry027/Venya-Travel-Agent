'use client'
import { Button } from '@mui/base'
import React from 'react'
import { Box } from '@mui/system'
import Nav from '../Nav'
import { Grid, TextField, Typography } from '@mui/material'
import '../general.css'
import Link from 'next/link'

export default function page ()
{
  return (
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
                <li class="stepper__item complete">1. Contact Information</li>
                <li class="stepper__item current">2. Bank & other Details</li>
                <li class="stepper__item">3. Upload Documents</li>
                <li class="stepper__item">4. Select Plan</li>
            </ul>
            
        </Box>
        <Box className='bankdetails-box1'>
            <Grid container sx={{
                padding:'3em',
                width:'auto',
                height:'auto'
            }}>
                <Grid item xs={12}>
                    <Typography sx={{
                        fontSize:'25px',
                        fontWeight:'700',
                        lineHeight:'20px',
                        marginBottom:'1em',
                        

                    }}>
                        Bank Details
                    </Typography>
                </Grid>

                <Grid item lg={2.3} md={3} sm={5} xs={12} sx={{
                    marginRight:'1em'
                }}>
                    <Typography sx={{
                        color:'#696F79',
                        fontSize:'16px',
                        fontWeight:'400',
                        marginBottom:'0.5em',
                        
                    }}>
                        Account Holder Name*
                    </Typography>
                    <TextField required
                    fullWidth/>
                </Grid>

                <Grid item lg={2.2} md={3} sm={5} xs={12} sx={{
                    marginRight:'1em'
                }}>
                    <Typography sx={{
                        color:'#696F79',
                        fontSize:'16px',
                        fontWeight:'400',
                        marginBottom:'0.5em'
                    }}>
                        Account No.*
                    </Typography>
                    <TextField required
                    fullWidth/>
                </Grid>

                <Grid item  lg={2.2} md={3} sm={5} xs={12} sx={{
                    marginRight:'1em'
                }}>
                    <Typography sx={{
                        color:'#696F79',
                        fontSize:'16px',
                        fontWeight:'400',
                        marginBottom:'0.5em'
                    }}>
                        IFSC/SWIFT/IBAN Code*
                    </Typography>
                    <TextField required
                    fullWidth/>
                </Grid>

                <Grid item lg={2.2} md={3} sm={5} xs={12} sx={{
                    marginRight:'1em'
                }}>
                    <Typography sx={{
                        color:'#696F79',
                        fontSize:'16px',
                        fontWeight:'400',
                        marginBottom:'0.5em'
                    }}>
                        Bank Name*
                    </Typography>
                    <TextField required
                    fullWidth/>
                </Grid>

                <Grid item lg={2.2} md={3} sm={5} xs={12} sx={{
                    marginRight:'1em'
                }}>
                    <Typography sx={{
                        color:'#696F79',
                        fontSize:'16px',
                        fontWeight:'400',
                        marginBottom:'0.5em'
                    }}>
                        Branch*
                    </Typography>
                    <TextField required
                    fullWidth/>
                </Grid>

                


                <Grid item xs={12} sx={{marginTop:'2em'}}>
                    <Typography sx={{
                        fontSize:'25px',
                        fontWeight:'700',
                        lineHeight:'20px',
                        marginBottom:'1em',
                        

                    }}>
                        Statutory Information
                    </Typography>
                </Grid>

                <Grid item lg={4} md={4} xs={12} sx={{
                    marginRight:'1em'
                }}>
                    <Typography sx={{
                        color:'#696F79',
                        fontSize:'16px',
                        fontWeight:'400',
                        marginBottom:'0.5em'
                    }}>
                        PAN No./TIN No.*
                    </Typography>
                    <TextField required
                    fullWidth/>
                </Grid>

                <Grid item  lg={4} md={4} xs={12} sx={{
                    marginRight:'1em'
                }}>
                    <Typography sx={{
                        color:'#696F79',
                        fontSize:'16px',
                        fontWeight:'400',
                        marginBottom:'0.5em'
                    }}>
                        GST No. / VAT No.:*
                    </Typography>
                    <TextField required
                    fullWidth/>
                </Grid>
                
                <Grid container justifyContent="center" mt='5em'>

                    {/* <Grid item xs={2} display='flex' style={{
                        alignItems:'right',
                        alignContent:'right',
                        float:'right',
                        margin: 'none',

                    }}> */}
                        <Link href='./RegistrationForm'>
                            <Button fullWidth className='back-button'>Back</Button>
                        </Link>
                        
                    {/* </Grid> */}
                    {/* <Grid item xs={3} > */}
                        <Link href='./documents'>
                            <Button fullWidth className='proceed-button-reg'>Proceed</Button>
                        </Link>
                        
                    {/* </Grid> */}
                </Grid>

               

                
            </Grid>
            

        </Box>
       
        
        
        
       
    </Box>
  )
}



'use client'
import React from 'react'
import NavMain from '../NavMain'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import {
    Button,
    TextField,
    Stepper,
    Step,
    StepLabel,
  } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import x from '../Images/calendar-today.webp'
import y from '../Images/search.webp'
import z from '../Images/arrow-drop-down.webp'
import Image from "next/image"
import Link from 'next/link';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2, 
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
export default function page ()
{
    return (
        <>  
        
            <NavMain/>
            
            
            {/* <Container maxWidth="sm" > */}
                <Grid container spacing={2} sx={{ flexGrow: 1, borderRadius: '10px',background: '#FFF',boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',width: 'auto',height: '549px',marginTop:'4%',marginLeft:'2%',marginRight:'2%',paddingRight:'20px'}}>
                    <Grid item xs={5} sx={{}}>
                        <h3 sx={{color: '#000',
                                fontFamily: 'Roboto',
                                fontSize: '25px',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: '20px'}}>
                                    Choose Date</h3><br/>
                        <Grid container spacing={0}>
                            <Grid item xs={4}>
                            <Typography sx={{color: '#696F79',
                                            fontFamily: 'Roboto',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            lineHeight: 'normal'}}> CheckIn</Typography>
                            
                            <TextField
                              required
                              fullWidth
                              size="small"
                              placeholder="From"
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">

                                    <Image className='image' src = {x}
                                                alt=''
                                                style={{
                                                    width:'100%',
                                                    
                                                }}
                                                    />
                                  </InputAdornment>
                                ),
                              }}
                              sx={{
                                height: '20px',
                                borderRadius: '6px 0px 0px 6px',
                            }}
                            />
                            </Grid>
                            <Grid item xs={3}>
                            
                            <Typography sx={{color: '#696F79',
                                            fontFamily: 'Roboto',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            lineHeight: 'normal'}}>No. of nights</Typography>
                            
                            <TextField
                              required
                              fullWidth
                              size="small"
                              sx={{
                                height: '20px',
                                borderRadius: '6px 0px 0px 6px',
                            }}
                            />
                            
                            </Grid>
                            <Grid item xs={5}>
                            
                            <Typography sx={{color: '#696F79',
                                            fontFamily: 'Roboto',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            lineHeight: 'normal'}}> CheckOut</Typography>
                            
                            <TextField
                              required
                              fullWidth
                              size="small"
                              placeholder="To"
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">

                                    <Image className='image' src = {x}
                                                alt=''
                                                style={{
                                                    width:'100%',
                                                    
                                                }}
                                                    />
                                  </InputAdornment>
                                ),
                              }}
                              sx={{
                                height: '20px',
                                borderRadius: '6px 0px 0px 6px',
                                // borderTop: '1px solid #8692A6',
                                // borderBottom: '1px solid #8692A6',
                                // borderLeft: '1px solid #8692A6'
                            }}
                            />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                    <h3 sx={{color: '#000',
                                fontFamily: 'Roboto',
                                fontSize: '25px',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: '20px'}}>
                                    Choose Location</h3><br/>
                            <Typography sx={{color: '#696F79',
                                            fontFamily: 'Roboto',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            lineHeight: 'normal'}}>Search for location</Typography>
                            
                            <TextField
                              required
                              fullWidth
                              size="small"
                              placeholder="Search"
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">

                                    <Image className='image' src = {y}
                                                alt=''
                                                style={{
                                                    width:'100%',
                                                    
                                                }}
                                                    />
                                  </InputAdornment>
                                ),
                              }}
                              sx={{
                                height: '20px',
                                borderRadius: '6px 0px 0px 6px',
                                // borderTop: '1px solid #8692A6',
                                // borderBottom: '1px solid #8692A6',
                                // borderLeft: '1px solid #8692A6'
                            }}
                            />
                    </Grid>
                    <Grid item xs={2}>
                    <h3 sx={{color: '#000',
                                fontFamily: 'Roboto',
                                fontSize: '25px',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: '20px'}}>
                                    Choose Date</h3><br/>
                            <Typography sx={{color: '#696F79',
                                            fontFamily: 'Roboto',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            lineHeight: 'normal'}}>Room Type</Typography>
                            
                            <TextField
                              required
                              fullWidth
                              size="small"
                              placeholder="Search"
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">

                                    <Image className='image' src = {z}
                                                alt=''
                                                style={{
                                                    width:'100%',
                                                    
                                                }}
                                                    />
                                  </InputAdornment>
                                ),
                              }}
                              sx={{
                                height: '20px',
                                borderRadius: '6px 0px 0px 6px',
                            }}
                            />
                    </Grid>
                    <Grid item xs={2}>
                            <br/><br/><br/>
                            
                            <Button variant="contained" sx={{borderRadius: '6px',
background: '#364D3F',color:'white'}} fullWidth>
                            <Image className='image' src = {y}
                                                alt=''
                                                style={{
                                                    color:'white',
                                                    width:'20px'
                                                }}
                                                
                                                    /> 
                                                    <Link href='../newbooking/properties' style={{borderRadius: '6px',
color:'white', textDecoration:'none'}}>
                                                      
                                                    Search
                                                    </Link>
                            </Button>
                    </Grid>
                </Grid>
            {/* </Container> */}

        </>
        

    )
}
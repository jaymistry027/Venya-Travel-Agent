'use client'
import React from 'react'
import NavMain from '../NavMain'
import calendars from '../Images/calendar.webp'
import req from '../Images/Request Sent.webp'
import booking from '../Images/Booking Confirmed.webp'
import cancel from '../Images/Cancelled Booking.webp'
import confirm from '../Images/Confirmed Request.webp'
import payment from '../Images/Payment Confirmed.webp'
import trip from '../Images/Trips.webp'
import Image from 'next/image'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import './dashboard.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function page() {
    return (
        <>
            <NavMain />

            <Typography sx={{
                textAlign: 'center',
                marginTop: '25px',
                color: '#000',
                leadingTrim: 'both',
                textEdge: 'cap',
                fontFamily: 'Roboto',
                fontSize: '44px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
                letterSpacing: '-0.88px'
            }}>
                Welcome to Dashboard
            </Typography>
            <div className='dash'>
            <Grid container spacing={2} sx={{ minWidth: 275, marginLeft: 5, marginTop: 5, marginRight: 5, width: 'auto',height:'auto' }}>
                <Grid item xs={3} >
                    <Item sx={{
                        borderRadius: '10px',
                        background: '#F0D2BE',
                        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)'
                    }}><CardContent>
                            <Typography color="text.secondary" gutterBottom>
                                {/* Word of the Day */}
                                <Link className="link1" href='../requestSent' style={{textDecoration: 'none',
    color: '#79332A'}}>
                                <Image className='image' src={req} alt=""/>
                                </Link>

                            </Typography>

                            <Typography variant="body2" sx={{
                                color: '#79332A',
                                leadingTrim: 'both',
                                textEdge: 'cap',
                                fontFamily: 'Roboto',
                                fontSize: '28px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal',
                                letterSpacing: '-0.56px'
                            }}>
                                <Link className="link1" href='../requestSent' style={{textDecoration: 'none',
    color: '#79332A'}}>
                                Request Sent
                                </Link>
                                <br />
                            </Typography>
                        </CardContent>
                    </Item>
                </Grid>

                <Grid item xs={3}>
                    <Item sx={{
                        borderRadius: '10px',
                        background: '#F0D2BE',
                        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)'
                    }}><CardContent>
                            <Typography color="text.secondary" gutterBottom>
                                {/* Word of the Day */}
                                <Link href='../confirmedRequest' style={{textDecoration: 'none',
    color: '#79332A'}}>
                                <Image className='image' src={confirm} alt=""/>
                                </Link>
                            </Typography>

                            <Typography variant="body2" sx={{
                                color: '#79332A',
                                leadingTrim: 'both',
                                textEdge: 'cap',
                                fontFamily: 'Roboto',
                                fontSize: '28px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal',
                                letterSpacing: '-0.56px'
                            }}>
                                <Link href='../confirmedRequest' style={{textDecoration: 'none',
    color: '#79332A'}}>
                                Confirmed Request
                                </Link>
                                <br />

                            </Typography>
                        </CardContent>
                    </Item>
                </Grid>

                <Grid item xs={3} >
                    <Item sx={{
                        borderRadius: '10px',
                        background: '#F0D2BE',
                        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)'
                    }}><CardContent>
                            <Typography  color="text.secondary" gutterBottom>
                                {/* Word of the Day */}
                                <Link href='../paymentConfirmed' style={{textDecoration: 'none',
    color: '#79332A'}}>
                                <Image className='image' src={payment} alt=""/>
                                </Link>
                            </Typography>

                            <Typography variant="body2" sx={{
                                color: '#79332A',
                                leadingTrim: 'both',
                                textEdge: 'cap',
                                fontFamily: 'Roboto',
                                fontSize: '28px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal',
                                letterSpacing: '-0.56px'
                            }}>
                                <Link href='../paymentConfirmed' style={{textDecoration: 'none',
    color: '#79332A'}}>
                                Payment Confirmed
                                </Link>
                                <br />
                            </Typography>
                        </CardContent>
                    </Item>
                </Grid>

                <Grid item xs={3} >
                    <Item sx={{
                        borderRadius: '10px',
                        background: '#F0D2BE',
                        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)'
                    }}><CardContent>
                            <Typography  color="text.secondary" gutterBottom>
                                {/* Word of the Day */}
                                <Link href='../bookingConfirmed' style={{textDecoration: 'none',
    color: '#79332A'}}>
                                <Image className='image' src={booking} alt=""/>
                                </Link>
                            </Typography>

                            <Typography variant="body2" sx={{
                                color: '#79332A',
                                leadingTrim: 'both',
                                textEdge: 'cap',
                                fontFamily: 'Roboto',
                                fontSize: '28px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal',
                                letterSpacing: '-0.56px'
                            }}>
                                <Link href='../bookingConfirmed' style={{textDecoration: 'none',
    color: '#79332A'}}>
                                Booking Confirmed
                                </Link>
                                <br />
                            </Typography>
                        </CardContent>
                    </Item>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ minWidth: 275, marginLeft: 5, marginTop: 5, marginRight: 5,width: 'auto',height:'auto' }}>
                <Grid item xs={3}>
                    <Item sx={{
                        borderRadius: '10px',
                        background: '#F0D2BE',
                        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)'
                    }}><CardContent>
                            <Typography  color="text.secondary" gutterBottom>
                                {/* Word of the Day */}
                                <Link href='../bookingCancelled' style={{textDecoration: 'none',
    color: '#79332A'}}>
                                <Image className='image' src={cancel} alt=""/>
                                </Link>
                            </Typography>

                            <Typography variant="body2" sx={{
                                color: '#79332A',
                                leadingTrim: 'both',
                                textEdge: 'cap',
                                fontFamily: 'Roboto',
                                fontSize: '28px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal',
                                letterSpacing: '-0.56px'
                            }}>
                                <Link href='../bookingCancelled' style={{textDecoration: 'none',
    color: '#79332A'}}>
                                Cancelled Booking
                                </Link>
                                <br />
                            </Typography>
                        </CardContent>
                    </Item>
                </Grid>

                <Grid item xs={3}  >
                    <Item sx={{
                        borderRadius: '10px',
                        background: '#F0D2BE',
                        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)'
                    }}><CardContent>
                            <Typography  color="text.secondary" gutterBottom>
                                {/* Word of the Day */}
                                <Link href='../trips' style={{textDecoration: 'none',
    color: '#79332A'}}>
                                <Image className='image' src={trip} alt=""/>
                                </Link>
                            </Typography>

                            <Typography variant="body2" sx={{
                                color: '#79332A',
                                leadingTrim: 'both',
                                textEdge: 'cap',
                                fontFamily: 'Roboto',
                                fontSize: '28px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal',
                                letterSpacing: '-0.56px'
                            }}>
                                <Link href='../trips' style={{textDecoration: 'none',
    color: '#79332A'}}>
                                Trips
                                </Link>
                                <br />
                            </Typography>
                        </CardContent>
                    </Item>
                </Grid>
            </Grid>
        
        </div>
        </>
    )


}
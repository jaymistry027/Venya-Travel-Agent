'use client'
import React from 'react'
import NavMain from '../NavMain'
import { DataGrid,DataGridOverlay } from '@mui/x-data-grid';
import './otpVerify.css';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { GridRowClassNameParams } from '@mui/x-data-grid';
import '../general.css';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Page() {

    return (
        <>
            <NavMain />
            <container className="cont">
                <Typography className="header">OTP Verification</Typography>
                <Typography className="box1">OTP sent to your registered mobile number and email</Typography>
            
                <div className='container'>
                <Typography className="msg1">Enter OTP received on your mobile number</Typography>
                <TextField id="outlined-basic" variant="outlined" className="input1"/>

                <Typography className='msg2'>Enter OTP received on your email address</Typography>
                <TextField id="outlined-basic" variant="outlined" className="input2"/>

                <Button variant="contained" className='but'>Submit</Button>
                </div>
            </container>
    
        </>
    )
}
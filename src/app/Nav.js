'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import x from './Images/logo.webp'


const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 ,
        padding:'none',
        margin:'none'
    }}>
      <AppBar position="static" sx={{
        backgroundColor:'#364D3F',
        alignItems:'center',
        justifyContent:'center',
        
        height:'12vh',
        margin:'none'
      }}>
        <Toolbar>
          <Image 
          src={x}
          alt=''
          width={100}/>
          
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Nav

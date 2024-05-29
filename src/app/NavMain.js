'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import x from './Images/logo.webp'
import { Grid, IconButton, ListItemIcon } from '@mui/material';
import { Button } from '@mui/base';
import Link from 'next/link';

import Menu from '@mui/material/Menu';

import MenuItem from '@mui/material/MenuItem';
import './NavMain.css'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const NavMain = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 ,
        padding:'none',
        margin:'none'
    }}>
      <AppBar position="static" sx={{
        backgroundColor:'#364D3F',
        //  alignItems:'center',
         justifyContent:'center',
        
        height:'12vh',
        margin:'none'
      }}>
        <Toolbar>
            <Grid container>
                <Grid item xs ={2}>
                    <Image 
                    src={x}
                    alt=''
                    width={100}/>

                </Grid>
                <Grid item xs={5}>

                </Grid>
                <Grid item xs={5} display='flex' >
                    <Grid container >
                        <Grid item xs={4}></Grid>
                        <Grid item xs={3.5} sx={{
                        
                            alignSelf:'center'
                        }
                        }>
                            <Link href='./newbooking' className='nav-buttons' >+ New Booking</Link>
                        </Grid>
                        <Grid item xs={2.5} sx={{
                        
                        alignSelf:'center'
                    }
                    }>
                            <Link href='/' className='nav-buttons'>Reports</Link>
                        </Grid>
                        <Grid item xs={2} sx={{
                        
                        alignSelf:'center'
                    }
                    }>
                            <Typography
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            >
                                Agents
                                <IconButton><ArrowDropDownOutlinedIcon sx={{color:'white'}} /></IconButton>
                                
                                
                            </Typography>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            sx={{
                                borderRadius:'10px',
                                
                            }}
                            >
                                <Link href='./profile' className='menu-link'><MenuItem onClick={handleClose} className='menu'>
                                    <ListItemIcon><AccountCircleOutlinedIcon/></ListItemIcon>Profile</MenuItem></Link>
                                <Link href='./manageTeam' className='menu-link'><MenuItem onClick={handleClose}className='menu'><ListItemIcon><SettingsApplicationsOutlinedIcon/></ListItemIcon>Manage Team</MenuItem></Link>
                                <Link href='./' className='menu-link'><MenuItem onClick={handleClose} ><ListItemIcon><RestartAltOutlinedIcon/></ListItemIcon>Reset Password</MenuItem></Link>
                            </Menu>
                        </Grid>
                        


                    </Grid>

                </Grid>
            </Grid>
          
          
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavMain
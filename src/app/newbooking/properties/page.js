'use client'
import React from 'react'
import NavMain2 from '../../NavMain2.js'
import Box from '@mui/material/Box';
import { DataGrid,DataGridOverlay } from '@mui/x-data-grid';
import './properties.css';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { GridRowClassNameParams } from '@mui/x-data-grid';
import Image from "next/image"
import x from '../../Images/download.webp'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Modal from '@mui/material/Modal';
import { Grid, TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import { Scrollbar } from 'react-scrollbars-custom';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import y from '../../Images/clear.webp'
import x1 from '../../Images/image22.webp'
import x2 from '../../Images/image23.webp'
import x3 from '../../Images/People.webp'
import GroupsIcon from '@mui/icons-material/Groups';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import z1 from '../../Images/calendar-today.webp'
import '../../general.css'
const OVERLAY_STYLE={
  position: "fixed",
  top: '0px',
  left: '0px',
  bottom: '0px',
  right: '0px',
  backgroundColor: 'rgba(0,0,0,0)',
  
  zIndex: '1000'
}
const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        bgcolor: 'white',
        border: 'none',
        boxShadow: 24,
        p: 1,
      };
      function RatesModal() {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
          setOpen(true);
        };
        const handleClose = () => {
          setOpen(false);
        };
        const [open1, setOpen1] = React.useState(false);

        const handleClick1 = () => {
          // setOpen1(!open1);
        };
        const [open2, setOpen2] = React.useState(false);
      
        const handleClick2 = () => {
          // setOpen2(!open2);
        };
        const [open3, setOpen3] = React.useState(false);
      
        const handleClick3 = () => {
          // setOpen3(!open3);
        };
        const [open4, setOpen4] = React.useState(false);
      
        const handleClick4 = () => {
          // setOpen4(!open4);
        };
        const [open5, setOpen5] = React.useState(false);
      
        const handleClick5 = () => {
          // setOpen5(!open5);
        };
        const [open6, setOpen6] = React.useState(false);
      
        const handleClick6 = () => {
          // setOpen6(!open6);
        };
      
        return (
          <React.Fragment>
            <Button onClick={handleOpen} className="button-21" sx={{color:'black'}}>Rates</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
            >
            {/* <Typography>FAQs</Typography> */}
              <Box sx={{ ...style, width: 400 }}>
              <ListItemText><b>Rates</b><Button onClick={handleClose} sx={{marginLeft:34}}><Image src={y} alt="" sx={{marginLeft:25}}/></Button></ListItemText>
              <ListItemButton onClick={handleClick1} sx={{borderRadius: '5px',
border: '1px solid #4A4A4A',
background: '#FFF'}}>
        
        <ListItemText primary=<b>₹50,000/- Incl. of all taxes</b>/>
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <ListItemButton onClick={handleClick2} sx={{borderRadius: '5px',
border: '1px solid #4A4A4A',
background: '#FFF'}}>
        
        <ListItemText primary=<b>₹50,000/- Incl. of all taxes</b>/>
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <ListItemButton onClick={handleClick3} sx={{borderRadius: '5px',
border: '1px solid #4A4A4A',
background: '#FFF'}}>
        
        <ListItemText primary=<b>₹50,000/- Incl. of all taxes</b>/>
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <ListItemButton onClick={handleClick4} sx={{borderRadius: '5px',
border: '1px solid #4A4A4A',
background: '#FFF'}}>
        
        <ListItemText primary=<b>₹50,000/- Incl. of all taxes</b>/>
        {open4 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <ListItemButton onClick={handleClick5} sx={{borderRadius: '5px',
border: '1px solid #4A4A4A',
background: '#FFF'}}>
        
        <ListItemText primary=<b>₹50,000/- Incl. of all taxes</b>/>
        {open5 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <ListItemButton onClick={handleClick6} sx={{borderRadius: '5px',
border: '1px solid #4A4A4A',
background: '#FFF'}}>
        
        <ListItemText primary=<b>₹50,000/- Incl. of all taxes</b>/>
        {open6 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      
                
              </Box>
            </Modal>
          </React.Fragment>
        );
      }
      function AboutModal() {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
          setOpen(true);
        };
        const handleClose = () => {
          setOpen(false);
        };
      
        return (
          <React.Fragment>
            <Button onClick={handleOpen} className="button-21" sx={{color:'black'}}>About</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
            >
              <Box sx={{ ...style, width: 700 }}>
                <h2 id="child-modal-title">Sheraton Grand Cape Coral <Button onClick={handleClose} sx={{marginLeft:34}}><Image src={y} alt="" sx={{marginLeft:25}}/></Button></h2>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Image src={x1} alt="" className="img1"/>
                  </Grid>
                  <Grid item xs={6}>
                  <Image src={x2} alt="" className="img1"/>
                  </Grid>
                  
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                  <GroupsIcon sx={{color: '#79332A',fontSize:'21px'}}/> <Typography sx={{fontSize:20 ,display:'inline'}}>4 Guests</Typography>
                  </Grid>
                  <Grid item xs={3}>
                  <HotelIcon sx={{color: '#79332A',fontSize:'21px'}}/> <Typography sx={{fontSize:20 ,display:'inline'}}>2 Bedrooms</Typography>
                  </Grid>
                  <Grid item xs={3}>
                  <BathtubIcon sx={{color: '#79332A',fontSize:'21px'}}/> <Typography sx={{fontSize:20 ,display:'inline'}}>2 Bathrooms</Typography>
                  </Grid>
                  
                </Grid>
                <Typography>Sat amidst a serene and tranquil environment, there lies a picturesque villa that exudes natural beauty and charm. With its breathtaking views of the Agafay dunes and the kasbahs, this property is a true oasis of peace and tranquility. With its breathtaking views of the Agafay dunes and the kasbahs, this property is a true oasis of peace</Typography>
                <h4 id="child-modal-title">Amenities</h4>
                <Grid container spacing={2}>
                  <Grid item xs={2.4}>
                  <GroupsIcon sx={{color: '#79332A',fontSize:'21px' }}/> <Typography sx={{fontSize:15 ,display:'inline'}}>Security</Typography>
                  </Grid>
                  <Grid item xs={2.4}>
                  <GroupsIcon sx={{color: '#79332A',fontSize:'21px'}}/> <Typography sx={{fontSize:15 ,display:'inline'}}>Parking</Typography>
                  </Grid>
                  <Grid item xs={2.4}>
                  <GroupsIcon sx={{color: '#79332A',fontSize:'21px'}}/> <Typography sx={{fontSize:15 ,display:'inline'}}>Transportation</Typography>
                  </Grid>
                  <Grid item xs={2.4}>
                  <GroupsIcon sx={{color: '#79332A',fontSize:'21px'}}/> <Typography sx={{fontSize:15 ,display:'inline'}}>Activities</Typography>
                  </Grid>
                  <Grid item xs={2.4}>
                  <GroupsIcon sx={{color: '#79332A',fontSize:'21px'}}/> <Typography sx={{fontSize:15 ,display:'inline'}}>Entertainment</Typography>
                  </Grid>
                  
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={2.4}>
                  <GroupsIcon sx={{color: '#79332A',fontSize:'21px' }}/> <Typography sx={{fontSize:15 ,display:'inline'}}>Cleaning</Typography>
                  </Grid>
                  <Grid item xs={2.4}>
                  <GroupsIcon sx={{color: '#79332A',fontSize:'21px'}}/> <Typography sx={{fontSize:15 ,display:'inline'}}>Outdoors</Typography>
                  </Grid>
                  <Grid item xs={2.4}>
                  <GroupsIcon sx={{color: '#79332A',fontSize:'21px'}}/> <Typography sx={{fontSize:12 ,display:'inline'}}>Food and Drinks</Typography>
                  </Grid>
                  <Grid item xs={2.4}>
                  <GroupsIcon sx={{color: '#79332A',fontSize:'21px'}}/> <Typography sx={{fontSize:15 ,display:'inline'}}>Kitchen</Typography>
                  </Grid>
                  <Grid item xs={2.4}>
                  <GroupsIcon sx={{color: '#79332A',fontSize:'21px'}}/> <Typography sx={{fontSize:12 ,display:'inline'}}>Common Areas</Typography>
                  </Grid>
                  
                </Grid>
                <h4 id="child-modal-title">House Rules</h4>
                <Typography>Check-In: 03:00 PM | Check Out - 11:00 AM</Typography>
              </Box>
            </Modal>
          </React.Fragment>
        );
      }
      function FAQsModal() {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
          setOpen(true);
        };
        const handleClose = () => {
          setOpen(false);
        };
        const [open1, setOpen1] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const [open2, setOpen2] = React.useState(false);

  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const [open3, setOpen3] = React.useState(false);

  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const [open4, setOpen4] = React.useState(false);

  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const [open5, setOpen5] = React.useState(false);

  const handleClick5 = () => {
    setOpen5(!open5);
  };
  const [open6, setOpen6] = React.useState(false);

  const handleClick6 = () => {
    setOpen6(!open6);
  };
      
        return (
          <React.Fragment>
            <Button onClick={handleOpen} className="button-21" sx={{color:'black'}}>FAQs</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
            >
            {/* <Typography>FAQs</Typography> */}
              <Box sx={{ ...style, width: 400 }}>
              <ListItemText><b>FAQs</b>              <Button onClick={handleClose} sx={{marginLeft:34}}><Image src={y} alt="" sx={{marginLeft:25}}/></Button></ListItemText>
              <div className='division'>
              <ListItemButton onClick={handleClick1} sx={{borderRadius: '5px',

background: '#FFF'}}>
        <ListItemText primary=<b>Q. How can I make the payment?</b>/>
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      
      <Collapse in={open1} timeout="auto" unmountOnExit>
       
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} >
          You can pay online, or connect with a our team offline regarding bank details.
          </ListItemButton>
        </List> 
        
      </Collapse>
      </div>

     <div className='division'>
      <ListItemButton onClick={handleClick2} sx={{borderRadius: '5px',
background: '#FFF'}}>


        
        <ListItemText primary=<b>Q. How can I make the payment?</b>/>
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          
          <ListItemButton sx={{ pl: 4 }}>
          You can pay online, or connect with a our team offline regarding bank details.
          </ListItemButton>
        </List>
      </Collapse>
      </div> 
      <div className='division'>
      <ListItemButton onClick={handleClick3} sx={{borderRadius: '5px',

background: '#FFF'}}>
        
        <ListItemText primary=<b>Q. How can I make the payment?</b>/>
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
          You can pay online, or connect with a our team offline regarding bank details.
          </ListItemButton>
        </List>
      </Collapse>
      </div>
      <div className='division'>
      <ListItemButton onClick={handleClick4} sx={{borderRadius: '5px',

background: '#FFF'}}>
        
        <ListItemText primary=<b>Q. How can I make the payment?</b>/>
        {open4 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
          You can pay online, or connect with a our team offline regarding bank details.
          </ListItemButton>
        </List>
      </Collapse>
      </div>
      <div className='division'>
      <ListItemButton onClick={handleClick5} sx={{borderRadius: '5px',

background: '#FFF'}}>
        
        <ListItemText primary=<b>Q. How can I make the payment?</b>/>
        {open5 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open5} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
          You can pay online, or connect with a our team offline regarding bank details.
          </ListItemButton>
        </List>
      </Collapse>
      </div>
      <div className='division'>
      <ListItemButton onClick={handleClick6} sx={{borderRadius: '5px',

background: '#FFF'}}>
        
        <ListItemText primary=<b>Q. How can I make the payment?</b>/>
        {open6 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open6} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
          You can pay online, or connect with a our team offline regarding bank details.
          </ListItemButton>
        </List>
      </Collapse>
      </div>

      
                
              </Box>
            </Modal>
          </React.Fragment>
        );
      }
      function RequestModal() {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
          setOpen(true);
        };
        const handleClose = () => {
          setOpen(false);
        };
      
        return (
          <React.Fragment>
            <Button onClick={handleOpen} className="button-21" sx={{color:'black'}}>Request</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
              style={OVERLAY_STYLE}
            >
              <Box sx={{ ...style, width: 500,padding:5,borderRadius: '10px',background: '#FFF'}}>
                <h2 id="child-modal-title">Add a request  <Button  onClick={handleClose} sx={{marginLeft:23}}><Image src={y} alt="" sx={{marginLeft:25}}/></Button></h2>
                <p id="child-modal-description">
                Fill the details to generate request to book
                </p><br/>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
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
                              defaultValue="From"
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">

                                    <Image className='image' src = {z1}
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
                            /><br/><br/>
                  </Grid>
                  <Grid item xs={6}>
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
                              defaultValue="To"
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">

                                    <Image className='image' src = {z1}
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
                            /><br/><br/>
                  </Grid>
                </Grid><br/>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                  <Typography sx={{color: '#696F79',
                                            fontFamily: 'Roboto',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            lineHeight: 'normal'}}>Partner Code</Typography>
                    <TextField
                              required
                              fullWidth
                              size="small"
                              defaultValue="TPC00123"
                              sx={{
                                height: '20px',
                                borderRadius: '6px 0px 0px 6px',
                                // borderTop: '1px solid #8692A6',
                                // borderBottom: '1px solid #8692A6',
                                // borderLeft: '1px solid #8692A6'
                            }}/>
                  </Grid>
                  <Grid item xs={6}>
                  <Typography sx={{color: '#696F79',
                                            fontFamily: 'Roboto',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            lineHeight: 'normal'}}>Partner Email</Typography>
                    <TextField
                              required
                              fullWidth
                              size="small"
                              defaultValue="123@gmail.com"
                              sx={{
                                height: '20px',
                                borderRadius: '6px 0px 0px 6px',
                                // borderTop: '1px solid #8692A6',
                                // borderBottom: '1px solid #8692A6',
                                // borderLeft: '1px solid #8692A6'
                            }}/>
                  </Grid><br/><br/><br/><br/>
                </Grid><br/>
                <Grid container direction="column" spacing={2}>

                  <Grid item  md={2.4} lg={2.4}>
                    <Typography sx={{color: '#696F79',
                                            fontFamily: 'Roboto',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            lineHeight: 'normal'}}>Guest Name</Typography>
                    <TextField
                      placeholder='Enter your full name'
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item md={2.4} lg={2.4}>
                    <Typography sx={{color: '#696F79',
                                            fontFamily: 'Roboto',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            lineHeight: 'normal'}}>Guest</Typography>
                    <TextField
                    placeholder='2 Adults'
                      fullWidth
                      required
                    /><br/>
                    <TextField
                    placeholder='0 Child'
                      fullWidth
                      required
                    /><br/>
                    <TextField
                    placeholder='0 Infant'
                      fullWidth
                      required
                    /><br/>
                    <TextField
                    placeholder='0 Pets'
                      fullWidth
                      required
                    />
                    
                  </Grid>
                    </Grid>
                    <br/>
                    Please inform us if you need an additional bed, or travelling with infants as well as what time is best to reach you.<br/><br/>
                    <input value="test" type="checkbox" style={{ width: 10, height: 10 }} />     I agree to the <b>Terms of Use</b> <br/>
                    <br/>
                <Button className="button-22"onClick={handleClose} sx={{borderRadius: '6px',background: '#364D3F',color:'white',width:420}} >Generate request</Button>
              </Box>
            </Modal>
          </React.Fragment>
        );
      }

export default function Page() {
    const [isLoading, setIsLoading] = useState(true);
    const getRowClassName = (params) => {
        return params.id % 2 === 1 ? 'alternateRow' : '';
    };
    const columns = [
        { field: 'id',
         headerName: 'ID', 
         width: 20,
         headerClassName:'cont1'
        },
    
        {
            field: 'villa',
            headerName: 'Villa',
            width: 200,
            headerClassName:'cont1'
    
        },
        {
            field: 'locality',
            headerName: 'Locality',
            width: 150,
            headerClassName:'cont1'
    
        },
        {
            field: 'bedroom',
            headerName: 'Bedrooms',
            width: 160,
            headerClassName:'cont1'
    
        },
        {
            field: "uniqueData",
            headerName: "Rates per night",
            width: 200,
            renderCell: (params) => (
              <>
                
                <div>
                  {params.row.uniqueData.map((line, index) => (
                    <>
                        <span>{line}</span>
                        {index !== params.row.uniqueData.length - 1 && <><br /><LocalOfferIcon sx={{fontSize:'medium',color:'#CF5416'}}/></>}
                    </>
                    ))}
                  
                </div>
              </>
            ),
            headerClassName: "cont1",
          },
    
          {
            field: 'Rates all taxes included',
            headerName: 'Rate all taxes incl.',
            width: 190,
            renderCell: (params) => {
                const handleDownload = () => {
                    console.log('Downloading attachment for row', params.row.id);
                };
                return (
                    <>
                    <RatesModal />
                    </>
                );
            }, headerClassName: 'cont1'
        },
        {
            field: 'About Property',
            headerName: 'About Property',
            width: 280,
            renderCell: (params) => {
                const handleDownload = () => {
                    console.log('Downloading attachment for row', params.row.id);
                };
                return (
                    <>
                    <AboutModal />
                    <FAQsModal />
                    </>
                );
            }, headerClassName: 'cont1'
        },
        
        {
            field: "promotions",
            headerName: "Promotions",
            width: 340,
            renderCell: (params) => (
              <>
                
                <div>
                {params.row.promotions.map((line, id) => (
                        <div key={id}>{line}</div>
                      ))}
                  
                </div>
              </>
            ),
            headerClassName: "cont1",
          },
          {
            field: 'action',
            headerName: 'Actions',
            width: 290,
            renderCell: (params) => {
                const handleDownload = () => {
                    console.log('Downloading attachment for row', params.row.id);
                };
                return (
                    <>
                    <button className="button-21" style={{ fontWeight: 'normal' }}><FileDownloadIcon sx={{fontSize: 'medium'}}/>Brochure</button>
                    <RequestModal />
                    
                    </>
                );
            }, headerClassName: 'cont1'
        },
        
    ];
    
    const rows = [
        { id: "1", villa: 'The Venya Villa', locality: 'Paros', bedroom: '1 Bedroom', promotions: ['5% off on stay on 8 days or longer', '5% off on stay on 8 days or longer','5% off on stay on 8 days or longer'], uniqueData: ['₹50000/- ', '50% off'],},
        { id: "2", villa: 'The Venya Villa', locality: 'Paros', bedroom: '1 Bedroom', promotions: ['5% off on stay on 8 days or longer', '5% off on stay on 8 days or longer','5% off on stay on 8 days or longer'],uniqueData: ['₹50000/- ', '50% off'], },
        { id: "3", villa: 'The Venya Villa', locality: 'Paros', bedroom: '1 Bedroom', promotions: ['5% off on stay on 8 days or longer', '5% off on stay on 8 days or longer','5% off on stay on 8 days or longer'],uniqueData: ['₹50000/- ', '50% off'], },
        { id: "4", villa: 'The Venya Villa', locality: 'Paros', bedroom: '1 Bedroom', promotions: ['5% off on stay on 8 days or longer', '5% off on stay on 8 days or longer','5% off on stay on 8 days or longer'],uniqueData: ['₹50000/- ', '50% off'], },
        { id: "5", villa: 'The Venya Villa', locality: 'Paros', bedroom: '1 Bedroom', promotions: ['5% off on stay on 8 days or longer', '5% off on stay on 8 days or longer','5% off on stay on 8 days or longer'],uniqueData: ['₹50000/- ', '50% off'], },
        { id: "6", villa: "The Venya Villa", locality: 'Paros', bedroom: '1 Bedroom', promotions: ['5% off on stay on 8 days or longer', '5% off on stay on 8 days or longer','5% off on stay on 8 days or longer'] ,uniqueData: ['₹50000/- ', '50% off'],},
        { id: "7", villa: 'The Venya Villa', locality: 'Paros', bedroom: '1 Bedroom', promotions: ['5% off on stay on 8 days or longer', '5% off on stay on 8 days or longer','5% off on stay on 8 days or longer'] ,uniqueData: ['₹50000/- ', '50% off'],},
        { id: "8", villa: 'The Venya Villa', locality: 'Paros', bedroom: '1 Bedroom', promotions: ['5% off on stay on 8 days or longer', '5% off on stay on 8 days or longer','5% off on stay on 8 days or longer'] ,uniqueData: ['₹50000/- ', '50% off'],},
        { id: "9", villa: 'The Venya Villa', locality: 'Paros', bedroom: '1 Bedroom', promotions: ['5% off on stay on 8 days or longer', '5% off on stay on 8 days or longer','5% off on stay on 8 days or longer'] ,uniqueData: ['₹50000/- ', '50% off'],},
    ];
    
    
    return (
        <>
            <NavMain2 />
            
            <container className="extcont">
                <Box className="cont2" sx={{  width: '100%' ,marginTop:'39px',height:550}}>
                {/* <DataGridOverlay loading={isLoading}> */}
                <DataGrid
                    rowHeight={75}
                    rows={rows}
                    columns={columns}
                    getRowClassName={getRowClassName}
                    hideFooterPagination={true}
                />
                {/* </DataGridOverlay> */}


                
            </Box>
    
            
            </container>
        </>
    )
}
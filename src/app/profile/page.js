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
import Nav from '../NavMain'
import Link from 'next/link';
import './profile.css'

const steps = ["Step 1", "Step 2", "Step 3"];

export default function RegistrationForm() {
  const [checked, setChecked] = React.useState(false);
  function handleChange(e) {
    setChecked(e.target.checked);
  }

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [passwordVisible3, setPasswordVisible3] = useState(false);
  const [passwordVisible4, setPasswordVisible4] = useState(false);
  const [passwordVisible5, setPasswordVisible5] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };
  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };
  const togglePasswordVisibility3 = () => {
    setPasswordVisible3(!passwordVisible3);
  };
  const togglePasswordVisibility4 = () => {
    setPasswordVisible4(!passwordVisible4);
  };
  const togglePasswordVisibility5 = () => {
    setPasswordVisible5(!passwordVisible5);
  };

  return (
    <><Nav />

      <Container sx={{ mt: 8 }} style={{ margin: 10 }}>
        <br /><br />

        <Grid container direction="column" alignItems="center" spacing={2} className='bankdetails-box2' sx={{ backgroundColor: '#fff' }}>
          <div
            style={{ padding: 50, width: '100%' }}
          >
            <Grid item xs={12} >

              <>
                <Typography className="grid-items" fullWidth sx={{
                  color: '#FFF',
                  width: 'auto',
                  fontFamily: 'Roboto',
                  fontSize: '30px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: 'normal',
                  height: '89px',
                  flexShrink: 0,
                  borderRadius: '10px 10px 0px 0px',
                  background: '#364D3F',
                  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                  marginTop: '-50px',
                  marginLeft: '-50px',
                  marginRight: '-50px',
                  paddingTop: '20px',
                  paddingLeft: '20px'
                }}>
                  {"Profile"}
                </Typography>

                <Typography sx={{
                  color: 'black',
                  fontFamily: 'Roboto',
                  fontSize: 25,
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 1,
                  paddingTop: '20px'
                }}>Contact Details</Typography>
                <Grid container spacing={2} mt='0.5%'>

                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      display: 'flex',
                      // width: '100px',
                      height: '17.906px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexShrink: '0',
                      color: '#696F79',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>Partner Name</Typography>
                    <TextField fullWidth />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      display: 'flex',
                      width: '200px',
                      height: '17.906px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexShrink: '0',
                      color: '#696F79',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>Company Name </Typography>
                    <TextField fullWidth />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      display: 'flex',
                      width: '200px',
                      height: '17.906px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexShrink: '0',
                      color: '#696F79',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>Mobile Number</Typography>
                    <TextField fullWidth
                      type='numbar'
                    />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      display: 'flex',
                      width: '100px',
                      height: '17.906px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexShrink: '0',
                      color: '#696F79',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>Email Address</Typography>
                    <TextField fullWidth />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      display: 'flex',
                      width: '200px',
                      height: '17.906px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexShrink: '0',
                      color: '#696F79',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>Whatsapp Number</Typography>
                    <TextField fullWidth
                      type='number'
                    />
                  </Grid>

                </Grid><br /><br />
                <Typography sx={{
                  color: 'black',
                  fontFamily: 'Roboto',
                  fontSize: 25,
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 1,
                }}>Registered Office Address</Typography>
                <Grid container spacing={2} mt='0.5%'>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      display: 'flex',
                      width: '100px',
                      height: '17.906px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexShrink: '0',
                      color: '#696F79',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>Country*</Typography>
                    <TextField fullWidth
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      display: 'flex',
                      width: '200px',
                      height: '17.906px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexShrink: '0',
                      color: '#696F79',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>State or Province*</Typography>
                    <TextField fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      display: 'flex',
                      width: '100px',
                      height: '17.906px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexShrink: '0',
                      color: '#696F79',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>City*</Typography>
                    <TextField fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      display: 'flex',
                      width: '200px',
                      height: '17.906px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexShrink: '0',
                      color: '#696F79',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>Street Address*</Typography>
                    <TextField fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      display: 'flex',
                      width: '100px',
                      height: '17.906px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexShrink: '0',
                      color: '#696F79',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>Main Address*</Typography>
                    <TextField fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      display: 'flex',
                      width: '100px',
                      height: '17.906px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexShrink: '0',
                      color: '#696F79',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>Pin Code*</Typography>
                    <TextField fullWidth
                      type='number'
                      required
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
                      lineHeight: 1,
                    }}>Billing Address</Typography>
                    <Grid container spacing={2} mt='0.5%'>
                      <Grid item xs={12} md={2.4} lg={2.4}>
                        <Typography sx={{
                          display: 'flex',
                          width: '100px',
                          height: '17.906px',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          flexShrink: '0',
                          color: '#696F79',
                          fontFamily: 'Roboto',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          lineHeight: 'normal'
                        }}>Country*</Typography>
                        <TextField fullWidth
                          required
                        />
                      </Grid>

                      <Grid item xs={12} md={2.4} lg={2.4}>
                        <Typography sx={{
                          display: 'flex',
                          width: '200px',
                          height: '17.906px',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          flexShrink: '0',
                          color: '#696F79',
                          fontFamily: 'Roboto',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          lineHeight: 'normal'
                        }}>State or Province*</Typography>
                        <TextField fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={2.4} lg={2.4}>
                        <Typography sx={{
                          display: 'flex',
                          width: '100px',
                          height: '17.906px',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          flexShrink: '0',
                          color: '#696F79',
                          fontFamily: 'Roboto',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          lineHeight: 'normal'
                        }}>City*</Typography>
                        <TextField fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={2.4} lg={2.4}>
                        <Typography sx={{
                          display: 'flex',
                          width: '200px',
                          height: '17.906px',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          flexShrink: '0',
                          color: '#696F79',
                          fontFamily: 'Roboto',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          lineHeight: 'normal'
                        }}>Street Address*</Typography>
                        <TextField

                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={2.4} lg={2.4}>
                        <Typography sx={{
                          display: 'flex',
                          width: '100px',
                          height: '17.906px',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          flexShrink: '0',
                          color: '#696F79',
                          fontFamily: 'Roboto',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          lineHeight: 'normal'
                        }}>Main Address*</Typography>
                        <TextField fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={2.4} lg={2.4}>
                        <Typography sx={{
                          display: 'flex',
                          width: '100px',
                          height: '17.906px',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          flexShrink: '0',
                          color: '#696F79',
                          fontFamily: 'Roboto',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          lineHeight: 'normal'
                        }}>Pin Code*</Typography>
                        <TextField fullWidth
                          type='number'
                          required
                        />
                      </Grid>

                    </Grid>
                  </>
                )}
              </>

            </Grid>

          </div>
        </Grid >

      </Container >

      <Container sx={{ mt: 8 }} style={{ margin: 10 }}>
        <br /><br />

        <Grid container direction="column" alignItems="center" spacing={2} className='bankdetails-box2' sx={{ backgroundColor: '#fff' }}>
          <div
            style={{ padding: 50, width: '100%' }}
          >
            <Grid item xs={12} >

              <>
                <Typography sx={{
                  color: 'black',
                  fontFamily: 'Roboto',
                  fontSize: 25,
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 1,
                }}>Bank Details</Typography>
                <Grid container spacing={2} mt='0.5%'>

                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      display: 'flex',
                      width: '200px',
                      height: '17.906px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexShrink: '0',
                      color: '#696F79',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>Account Holder Name</Typography>
                    <TextField fullWidth/>
                  </Grid>

                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      display: 'flex',
                      width: '100px',
                      height: '17.906px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexShrink: '0',
                      color: '#696F79',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>Bank Name</Typography>
                    <TextField fullWidth/>
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      display: 'flex',
                      width: '100px',
                      height: '17.906px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexShrink: '0',
                      color: '#696F79',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>Branch</Typography>
                    <TextField fullWidth/>
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      display: 'flex',
                      width: '200px',
                      height: '17.906px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexShrink: '0',
                      color: '#696F79',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>Account Number</Typography>
                    <TextField fullWidth/>
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      display: 'flex',
                      width: '300px',
                      height: '17.906px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexShrink: '0',
                      color: '#696F79',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>IFSC or SWIFT/IBAN</Typography>
                    <TextField fullWidth/>
                  </Grid>
                  <Grid item xs={12} md={2.4} lg={2.4}>
                    <Typography sx={{
                      display: 'flex',
                      width: '100px',
                      height: '17.906px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexShrink: '0',
                      color: '#696F79',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}></Typography>

                  </Grid>

                </Grid>

                <Typography sx={{
                  color: 'black',
                  fontFamily: 'Roboto',
                  fontSize: 25,
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 1,
                }}>Statutory Information</Typography>
                <Grid container spacing={2} mt='0.5%' >
                  {<Grid item xs={12} md={4} lg={4}>
                    <Typography sx={{
                      display: 'flex',
                      width: '200px',
                      height: '17.906px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexShrink: '0',
                      color: '#696F79',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>PAN No./TIN No.</Typography>
                    <TextField

                      fullWidth
                    />
                  </Grid>}

                  <Grid item xs={12} md={4} lg={4}>
                    <Typography sx={{
                      display: 'flex',
                      width: '200px',
                      height: '17.906px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexShrink: '0',
                      color: '#696F79',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>GST No./VAT No.</Typography>
                    <TextField
                      fullWidth
                    />
                  </Grid>

                </Grid>

                <>
                
                </>
              </>
              </Grid>
          </div>
        
      </Grid >
    </Container >

      <Container sx={{ mt: 8 }} style={{ margin: 10 }}>
        <br /><br />

        <Grid container direction="column" alignItems="center" spacing={2} className='bankdetails-box2' sx={{ backgroundColor: '#fff' }}>
          <div
            style={{ padding: 50, width: '100%' }}
          >
            <Grid item xs={12} >

              <>
                <Typography sx={{
                  color: 'black',
                  fontFamily: 'Roboto',
                  fontSize: 25,
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 1,
                }}>Company Documents</Typography>
                <Grid container spacing={2} mt='0.5%'>

                  <Grid item xs={12} md={3} lg={3} sx={{
                    display: 'flex',
                    width: '100px',
                    height: '17.906px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flexShrink: '0',
                    color: '#696F79',
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal',
                    marginTop: '40px'
                  }}>
                    PAN Card/TIN
                    <div className="textbox-container">
                      <input
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="DOCPAN1233"
                        className="textbox"
                        style={{ color: '#696F79', backgroundColor: '#fff' }}
                      />
                      <span
                        className={`eye-icon ${passwordVisible ? 'visible' : ''}`}
                        onClick={togglePasswordVisibility}
                      >
                        👁️
                      </span>

                    </div>
                  </Grid>
                  <Grid item xs={12} md={3} lg={3} sx={{
                    display: 'flex',
                    width: '100px',
                    height: '17.906px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flexShrink: '0',
                    color: '#696F79',
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal',
                    marginTop: '40px'
                  }}>
                    GST Certificate/TAX ID
                    <div className="textbox-container">
                      <input
                        type={passwordVisible1 ? 'text' : 'password'}
                        placeholder="DOCTAX1122"
                        className="textbox"
                      />
                      <span
                        className={`eye-icon ${passwordVisible1 ? 'visible' : ''}`}
                        onClick={togglePasswordVisibility1}
                      >
                        👁️
                      </span>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={3} lg={3} sx={{
                    display: 'flex',
                    width: '100px',
                    height: '17.906px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flexShrink: '0',
                    color: '#696F79',
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal',
                    marginTop: '40px'
                  }}>
                    CIN Certificate
                    <div className="textbox-container">
                      <input
                        type={passwordVisible2 ? 'text' : 'password'}
                        placeholder="DOCTCIN1122"
                        className="textbox"
                      />
                      <span
                        className={`eye-icon ${passwordVisible2 ? 'visible' : ''}`}
                        onClick={togglePasswordVisibility2}
                      >
                        👁️
                      </span>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={3} lg={3} sx={{
                    display: 'flex',
                    width: '100px',
                    height: '17.906px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flexShrink: '0',
                    color: '#696F79',
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal',
                    marginTop: '40px'
                  }}>
                    Cancelled Cheque
                    <div className="textbox-container">
                      <input
                        type={passwordVisible3 ? 'text' : 'password'}
                        placeholder="DOCTAX1122"
                        className="textbox"
                      />
                      <span
                        className={`eye-icon ${passwordVisible3 ? 'visible' : ''}`}
                        onClick={togglePasswordVisibility3}
                      >
                        👁️
                      </span>
                    </div>
                  </Grid>

                </Grid><br /><br />
                <Typography sx={{
                  color: 'black',
                  fontFamily: 'Roboto',
                  fontSize: 25,
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 1,
                  marginTop: '30px'
                }}>Authorised Signatory</Typography>
                <Grid container spacing={2} mt='0.5%'>
                  <Grid item xs={12} md={3} lg={3} sx={{
                    display: 'flex',
                    width: '100px',
                    height: '17.906px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flexShrink: '0',
                    color: '#696F79',
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal',
                    marginTop: '40px'
                  }}>
                    Aadhar Card or Passport
                    <div className="textbox-container">
                      <input
                        type={passwordVisible4 ? 'text' : 'password'}
                        placeholder="DOCTAX1122"
                        className="textbox"
                      />
                      <span
                        className={`eye-icon ${passwordVisible4 ? 'visible' : ''}`}
                        onClick={togglePasswordVisibility4}
                      >
                        👁️
                      </span>
                    </div>
                  </Grid>

                  <Grid item xs={12} md={3} lg={3} sx={{
                    display: 'flex',
                    width: '100px',
                    height: '17.906px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flexShrink: '0',
                    color: '#696F79',
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal',
                    marginTop: '40px'
                  }}>
                    PAN Card/TIN
                    <div className="textbox-container">
                      <input
                        type={passwordVisible5 ? 'text' : 'password'}
                        placeholder="DOCTAX1122"
                        className="textbox"
                      />
                      <span
                        className={`eye-icon ${passwordVisible5 ? 'visible' : ''}`}
                        onClick={togglePasswordVisibility5}
                      >
                        👁️
                      </span>
                    </div>
                  </Grid>

                </Grid>

                {checked ? (<p style={{ fontSize: 9, padding: 5 }}>  <input value="test" Checked={true} type="checkbox" onChange={handleChange} style={{ width: 10, height: 10 }} /> Billing address Same as office address</p>) : (
                  <>
                    <br /><br />
                  </>
                )}
              </>

            </Grid>

          </div>
        </Grid >

        <Grid container spacing={2} mt='0.5%'>
          <Grid item xs={4} md={4} lg={5}></Grid>
          <Grid item xs={4} md={3} lg={3}>
            <Button fullWidth className='proceed-button-cancel' sx={{color:'#364D3F'}}>Cancel</Button>

          </Grid>
          <Grid item xs={4} md={3} lg={3}>
            <Link href='../otpVerify'>
              <Button fullWidth className='proceed-button'>Update</Button>
            </Link>

          </Grid>
          
        </Grid>

      </Container >
    </>
  );
};

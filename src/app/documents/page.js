'use client'
import React from 'react'
import { useRef } from 'react'
import { Button } from '@mui/base'
import { Box } from '@mui/system'
import Nav from '../Nav'
import { Grid, TextField, Typography } from '@mui/material'
import '../general.css'

import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import Link from 'next/link';
import  { useState } from 'react';



    

export default function Page ()
{

    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
  
    const handleChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile.size > 1048576) {
        setError('File size cannot exceed 1MB');
        setFile(null);
      } else {
        setFile(selectedFile);
        setError('');
      }
    };

    const handleUpload = () => {
        console.log('Uploading file:', file);
      };


      const [file1, setFile1] = useState(null);
      const [error1, setError1] = useState('');
    
      const handleChange1 = (event) => {
        const selectedFile1 = event.target.files[0];
        if (selectedFile1.size > 1048576) {
          setError1('File size cannot exceed 1MB');
          setFile1(null);
        } else {
          setFile1(selectedFile1);
          setError1('');
        }
      };
  
      const handleUpload1 = () => {
          console.log('Uploading file:', file1);
        };


        const [file2, setFile2] = useState(null);
        const [error2, setError2] = useState('');
      
        const handleChange2 = (event) => {
          const selectedFile2 = event.target.files[0];
          if (selectedFile2.size > 1048576) {
            setError2('File size cannot exceed 1MB');
            setFile2(null);
          } else {
            setFile2(selectedFile2);
            setError2('');
          }
        };
    
        const handleUpload2 = () => {
            console.log('Uploading file:', file2);
          };


          const [file3, setFile3] = useState(null);
          const [error3, setError3] = useState('');
        
          const handleChange3 = (event) => {
            const selectedFile3 = event.target.files[0];
            if (selectedFile3.size > 1048576) {
              setError3('File size cannot exceed 1MB');
              setFile3(null);
            } else {
              setFile3(selectedFile3);
              setError3('');
            }
          };
      
          const handleUpload3 = () => {
              console.log('Uploading file:', file3);
            };

            const [file4, setFile4] = useState(null);
            const [error4, setError4] = useState('');
          
            const handleChange4 = (event) => {
              const selectedFile4 = event.target.files[0];
              if (selectedFile4.size > 1048576) {
                setError4('File size cannot exceed 1MB');
                setFile4(null);
              } else {
                setFile4(selectedFile4);
                setError4('');
              }
            };
        
            const handleUpload4 = () => {
                console.log('Uploading file:', file4);
              };

              const [file5, setFile5] = useState(null);
              const [error5, setError5] = useState('');
            
              const handleChange5 = (event) => {
                const selectedFile5 = event.target.files[0];
                if (selectedFile5.size > 1048576) {
                  setError5('File size cannot exceed 1MB');
                  setFile5(null);
                } else {
                  setFile5(selectedFile5);
                  setError5('');
                }
              };
          
              const handleUpload5 = () => {
                  console.log('Uploading file:', file5);
                };
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
                <li class="stepper__item complete">2. Bank & other Details</li>
                <li class="stepper__item current">3. Upload Documents</li>
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
                        Company Documents
                    </Typography>
                </Grid>

                <Grid item lg={2.8} md={2.8} sm={5} xs={12} sx={{
                    marginRight:'1em'
                }}>
                    <Typography sx={{
                        color:'#696F79',
                        fontSize:'16px',
                        fontWeight:'400',
                        marginBottom:'0.5em',
                        
                    }}>
                        PAN Card / TIN*
                    </Typography>
                    <TextField required onChange={handleChange} onClick={handleUpload}
                    type={'file'}
                    InputProps={{
                       
                        accept:"application/pdf"
                      }}
                      
                    className='custom-file-input'
                    fullWidth
                    
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                   
                    
       
                </Grid>

                <Grid item lg={2.8} md={2.8} sm={5} xs={12} sx={{
                    marginRight:'1em'
                }}>
                    <Typography sx={{
                        color:'#696F79',
                        fontSize:'16px',
                        fontWeight:'400',
                        marginBottom:'0.5em'
                    }}>
                        GST Certificate / TAX ID*
                    </Typography>
                    <TextField requires onChange={handleChange1} onClick={handleUpload1}
                    type={'file'}
                    InputProps={{
                       
                        accept:"application/pdf"
                      }}
                      
                    className='custom-file-input'
                    fullWidth
                    
                    />
                     {error1 && <p style={{ color: 'red' }}>{error1}</p>}
                </Grid>

                <Grid item lg={2.8} md={2.8} sm={5} xs={12} sx={{
                    marginRight:'1em'
                }}>
                    <Typography sx={{
                        color:'#696F79',
                        fontSize:'16px',
                        fontWeight:'400',
                        marginBottom:'0.5em'
                    }}>
                        CIN Certificate*
                    </Typography>
                    <TextField required onChange={handleChange2} onClick={handleUpload2}
                    type={'file'}
                    InputProps={{
                       
                        accept:"application/pdf"
                      }}
                      
                    className='custom-file-input'
                    fullWidth
                    
                    />
                    
                    {error2 && <p style={{ color: 'red' }}>{error2}</p>}

                </Grid>

                <Grid item lg={2.8} md={2.8} sm={5} xs={12} sx={{
                    marginRight:'1em'
                }}>
                    <Typography sx={{
                        color:'#696F79',
                        fontSize:'16px',
                        fontWeight:'400',
                        marginBottom:'0.5em'
                    }}>
                        Cancelled Cheque*
                    </Typography>
                    <TextField required onChange={handleChange3} onClick={handleUpload3}
                    type={'file'}
                    InputProps={{
                       
                        accept:"application/pdf"
                      }}
                      
                    className='custom-file-input'
                    fullWidth
                    
                    />
                    {error3 && <p style={{ color: 'red' }}>{error3}</p>}
                </Grid>



                <Grid item xs={12} sx={{marginTop:'2em'}}>
                    <Typography sx={{
                        fontSize:'25px',
                        fontWeight:'700',
                        lineHeight:'20px',
                        marginBottom:'1em',
                        

                    }}>
                        Authorised Signatory
                    </Typography>
                </Grid>

                <Grid item lg={2.8} md={4} xs={12} sx={{
                    marginRight:'1em'
                }}>
                    <Typography sx={{
                        color:'#696F79',
                        fontSize:'16px',
                        fontWeight:'400',
                        marginBottom:'0.5em'
                    }}>
                        Aadhar Card or Passport*
                    </Typography>
                    <TextField required onChange={handleChange4} onClick={handleUpload4}
                    type={'file'}
                    InputProps={{
                       
                        accept:"application/pdf"
                      }}
                      
                    className='custom-file-input'
                    fullWidth
                    
                    />
                    {error4 && <p style={{ color: 'red' }}>{error4}</p>}
                </Grid>

                <Grid item  lg={2.8} md={4} xs={12} sx={{
                    marginRight:'1em'
                }}>
                    <Typography sx={{
                        color:'#696F79',
                        fontSize:'16px',
                        fontWeight:'400',
                        marginBottom:'0.5em'
                    }}>
                        PAN Card / TIN*
                    </Typography>
                    <TextField required onChange={handleChange5} onClick={handleUpload5}
                    type={'file'}
                    InputProps={{
                       
                        accept:"application/pdf"
                      }}
                      
                    className='custom-file-input'
                    fullWidth
                    
                    />
                    {error5 && <p style={{ color: 'red' }}>{error5}</p>}
                </Grid>
                
                <Grid container justifyContent="center" mt='5em'>

                   
                        <Link href='./bankdetails'><Button fullWidth className='back-button'>Back</Button></Link>
                    
                 
                        <Link href='./plans'>
                            <Button fullWidth className='proceed-button-reg'>Proceed</Button>
                        </Link>
                        
                    
                </Grid>

               

                
            </Grid>
            

        </Box>
        
        
        
       
    </Box>
  )
}

'use client'
import { Button } from '@mui/base'
import React from 'react'
import { Box } from '@mui/system'
import Nav from '../Nav'
import { Grid, TextField, Typography } from '@mui/material'
import '../general.css'
import Link from 'next/link'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material/styles";
import { createTheme } from '@mui/material'

import y from '../Images/plan-image.webp'
import Image from 'next/image'
//  import PlanModal from '../PlanModal'

import Modal from '@mui/material/Modal';

import { Scrollbar } from 'react-scrollbars-custom';

// import './plans.css';



const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'white',
    border: 'none',
    boxShadow: 24,
    height:'78vh',
    p: 1,
  };

export default function Page() {

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



    return (
        <Box >
            <Nav />
            
           

            <Box  sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '2px 0'
            }}>

                <ul class="stepper" style={{
                    listStyle: 'none',

                    margin: 40,   /* Reset margin */
                    padding: 0,  /* Reset padding */
                }}>
                    <li class="stepper__item complete">1. Contact Information</li>
                    <li class="stepper__item complete">2. Bank & other Details</li>
                    <li class="stepper__item complete">3. Upload Documents</li>
                    <li class="stepper__item current">4. Select Plan</li>
                </ul>

            </Box>
            
            <h1 style={{textAlign: 'center'}}>Find Your Perfect Plan</h1>
            <Box className='plan-box'>
            <Box className='grid-plan'>
                <Grid container  sx={{
                    padding: '3em',
                    paddingLeft:'5em',

                }}
                     >
                    <Grid item xs={12} md={4} sm={4} lg={4} >
                        <br /><br />
                        <Card 
                        // sx={{ minWidth: 275 }} 
                        className='cards'>
                            <CardHeader />
                            {/* <CardContent> */}

                            <Typography color="text.primary" gutterBottom variant="h5">
                                Silver(3 months)
                            </Typography>
                            <Typography variant="h6" component="div">
                                {/* <strike>₹4500</strike>  <b>Free!!</b> */}
                                ₹3000
                            </Typography>
                            <div style={{ fontSize: 14 }}

                            >
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> 24X7 Support </div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> 1 Month Free Trial</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Dedicated Support</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Gala Dinner Invites</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Complimentary Stay Offers</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Additional Incentives</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Sales Training</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50, fontSize: 12 }}><CloseIcon fontSize='small' style={{ color: 'red', }} /> Access to International Properties</div>
                            </div><br /><br />
                            {/* </CardContent> */}
                            <CardActions style={{ padding: 0 }}>
                                <Button variant="contained" color="success" onClick={handleOpen} style={{ width: 3000, height: 50 }} className='proceed-button1'>
                                    Create Account
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}  sm={4} lg={4}>
                    <Typography style={{ borderRadius: '16px 16px 0px 0px',background: '#EE0404',width: '25vw',
                                    height: '45px',
                                    flexShrink: '0',
                                    color:'white',
                                    paddingTop:'0.5em',
                                    fontSize:'18px',
                                    textAlign:'center' }}>Introductory Offer</Typography>
                        <Card  className='cards'>
                            {/* <CardContent> */}
                            <br /><br />
                            <Typography color="text.primary" gutterBottom variant="h5">
                                Gold(6 months)
                            </Typography>
                            <Typography variant="h6" component="div">
                                <strike>₹4500</strike>  <b>Free!!</b>
                            </Typography>
                            <div style={{ fontSize: 14 }}

                            >
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> 24X7 Support </div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> 1 Month Free Trial</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> Dedicated Support</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Gala Dinner Invites</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Complimentary Stay Offers</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Additional Incentives</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Sales Training</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50, fontSize: 12 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Access to International Properties</div>
                            </div><br /><br />
                            {/* </CardContent> */}
                            <CardActions style={{ padding: 0 }}>
                                <Button variant="contained" color="success"   onClick={handleOpen}    style={{ width: 3000, height: 50 }} className='create-account' >
                                    Create Account
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <br /><br />
                        <Card  className='cards' >
                            {/* <CardContent> */}
                            <CardHeader />

                            <Typography color="text.primary" gutterBottom variant="h5">
                                Platinum(12 months)
                            </Typography>
                            <Typography variant="h6" component="div">
                                ₹6000
                            </Typography>
                            <div style={{ fontSize: 14 }}

                            >
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> 24X7 Support </div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> 1 Month Free Trial</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> Dedicated Support</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> Gala Dinner Invites</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> Complimentary Stay Offers</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> Additional Incentives</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> Sales Training</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50, fontSize: 12 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> Access to International Properties</div>
                            </div><br /><br />
                            {/* </CardContent> */}
                            <CardActions style={{ padding: 0 }}>
                                <Button variant="contained" color="success" className='proceed-button1' onClick={handleOpen} style={{ width: 3000, height: 50 ,color:'white'}} >
                                    Create Account
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            </Box>
            <Image src={y} sx={{display:"flex", justifyContent:"flexBottom"}} className='plan-image' alt=""/>

{/* -------------------------------------------------------------------------------------------------------------------------------------------------- */}
        
<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby= "modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container >
            <Grid item xs={12}>
                <Typography sx={{
                    color:'#364D3F',
                    fontSize:'24px',
                    fontWeight:'700',
                    lineHeight:'150%',
                    padding:'20px 20px',
                }}> Terms and Conditions</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography sx={{
                    color:'black',
                    fontSize:'18px',
                    fontWeight:'700',
                    lineHeight:'150%',
                    
                    padding:'0px 23px',
                }}>
                    Your Agreement
                </Typography>
            </Grid>
            <Grid item xs={12}>
            <Scrollbar style={{ height: '50vh' }}>
                <p style={{
                    // text-align: 'justify';
                    color: 'var(--Gris-oscuro, #6B6B6B)',
                    fontFamily: 'Roboto',
                    fontSize: '17px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '150%',
                    padding: '10px 46px 46px 23px'
                }}>
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar neque nisi, sodales lacinia orci lacinia nec. Nunc euismod ullamcorper risus ac scelerisque. Curabitur tincidunt velit nunc, et pretium odio vehicula id. Nulla in congue purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce mollis iaculis nisi sed vestibulum. Ut tincidunt nulla id dui ultrices, ut varius nunc tincidunt. Phasellus ultrices lacus vel lacus tincidunt condimentum. Donec blandit, nisi vel placerat faucibus, sapien est aliquam elit, et efficitur nunc lectus id purus. Praesent malesuada tortor aliquet tincidunt ultrices. Praesent eget cursus purus, et molestie quam. */}
                Last Revised: December 16, 2013 <br/> Welcome to www.lorem-ipsum.info. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully. <br/> 1. YOUR AGREEMENT By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.<br/> PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.<br/> 2. PRIVACY Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.<br/> 3. LINKED SITES This Site may contain links to other independent third-party Web sites (Linked Sites). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.<br/> 4. FORWARD LOOKING STATEMENTS All materials reproduced on this site speak as of the original date of publication or filing. The fact that a document is available on this site does not mean that the information contained in such document has not been modified or superseded by events or by a subsequent document or filing. We have no duty or policy to update any information or statements contained on this site and, therefore, such information or statements should not be relied upon as being current as of the date you access this site.<br/> 5. DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY A. THIS SITE MAY CONTAIN INACCURACIES AND TYPOGRAPHICAL ERRORS. WE DOES NOT WARRANT THE ACCURACY OR COMPLETENESS OF THE MATERIALS OR THE RELIABILITY OF ANY ADVICE, OPINION, STATEMENT OR OTHER INFORMATION DISPLAYED OR DISTRIBUTED THROUGH THE SITE. YOU EXPRESSLY UNDERSTAND AND AGREE THAT: (i) YOUR USE OF THE SITE, INCLUDING ANY RELIANCE ON ANY SUCH OPINION, ADVICE, STATEMENT, MEMORANDUM, OR INFORMATION CONTAINED HEREIN, SHALL BE AT YOUR SOLE RISK; (ii) THE SITE IS PROVIDED ON AN AS IS AND AS AVAILABLE BASIS; (iii) EXCEPT AS EXPRESSLY PROVIDED HEREIN WE DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, WORKMANLIKE EFFORT, TITLE AND NON-INFRINGEMENT; (iv) WE MAKE NO WARRANTY WITH RESPECT TO THE RESULTS THAT MAY BE OBTAINED FROM THIS SITE, THE PRODUCTS OR SERVICES ADVERTISED OR OFFERED OR MERCHANTS INVOLVED; (v) ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SITE IS DONE AT YOUR OWN DISCRETION AND RISK; and (vi) YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR FOR ANY LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL. B. YOU UNDERSTAND AND AGREE THAT UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, ANY OF OUR SITES OR MATERIALS OR FUNCTIONS ON ANY SUCH SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING LIMITATIONS SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY. 6. EXCLUSIONS AND LIMITATIONS SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, OUR LIABILITY IN SUCH JURISDICTION SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW. 7. OUR PROPRIETARY RIGHTS This Site and all its Contents are intended solely for personal, non-commercial use. Except as expressly provided, nothing within the Site shall be construed as conferring any license under our or any third partys intellectual property rights, whether by estoppel, implication, waiver, or otherwise. Without limiting the generality of the foregoing, you acknowledge and agree that all content available through and used to operate the Site and its services is protected by copyright, trademark, patent, or other proprietary rights. You agree not to: (a) modify, alter, or deface any of the trademarks, service marks, trade dress (collectively Trademarks) or other intellectual property made available by us in connection with the Site; (b) hold yourself out as in any way sponsored by, affiliated with, or endorsed by us, or any of our affiliates or service providers; (c) use any of the Trademarks or other content accessible through the Site for any purpose other than the purpose for which we have made it available to you; (d) defame or disparage us, our Trademarks, or any aspect of the Site; and (e) adapt, translate, modify, decompile, disassemble, or reverse engineer the Site or any software or programs used in connection with it or its products and services. The framing, mirroring, scraping or data mining of the Site or any of its content in any form and by any method is expressly prohibited. 8. INDEMNITY By using the Site web sites you agree to indemnify us and affiliated entities (collectively Indemnities) and hold them harmless from any and all claims and expenses, including (without limitation) attorneys fees, arising from your use of the Site web sites, your use of the Products and Services, or your submission of ideas and/or related materials to us or from any persons use of any ID, membership or password you maintain with any portion of the Site, regardless of whether such use is authorized by you. 9. COPYRIGHT AND TRADEMARK NOTICE Except our generated dummy copy, which is free to use for private and commercial use, all other text is copyrighted. generator.lorem-ipsum.info © 2013, all rights reserved 10. INTELLECTUAL PROPERTY INFRINGEMENT CLAIMS It is our policy to respond expeditiously to claims of intellectual property infringement. We will promptly process and investigate notices of alleged infringement and will take appropriate actions under the Digital Millennium Copyright Act (DMCA) and other applicable intellectual property laws. Notices of claimed infringement should be directed to: generator.lorem-ipsum.info 126 Electricov St. Kiev, Kiev 04176 Ukraine contact@lorem-ipsum.info 11. PLACE OF PERFORMANCE This Site is controlled, operated and administered by us from our office in Kiev, Ukraine. We make no representation that materials at this site are appropriate or available for use at other locations outside of the Ukraine and access to them from territories where their contents are illegal is prohibited. If you access this Site from a location outside of the Ukraine, you are responsible for compliance with all local laws. 12. GENERAL A. If any provision of these Terms and Conditions is held to be invalid or unenforceable, the provision shall be removed (or interpreted, if possible, in a manner as to be enforceable), and the remaining provisions shall be enforced. Headings are for reference purposes only and in no way define, limit, construe or describe the scope or extent of such section. Our failure to act with respect to a breach by you or others does not waive our right to act with respect to subsequent or similar breaches. These Terms and Conditions set forth the entire understanding and agreement between us with respect to the subject matter contained herein and supersede any other agreement, proposals and communications, written or oral, between our representatives and you with respect to the subject matter hereof, including any terms and conditions on any of customers documents or purchase orders. B. No Joint Venture, No Derogation of Rights. You agree that no joint venture, partnership, employment, or agency relationship exists between you and us as a result of these Terms and Conditions or your use of the Site. Our performance of these Terms and Conditions is subject to existing laws and legal process, and nothing contained herein is in derogation of our right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by us with respect to such use.
                </p>
            </Scrollbar>
            </Grid>

            <Grid item xs={8}>

            </Grid>
            <Grid item xs={1}>
                <Button fullWidth onClick={handleClose} style={{
                    color: '#2C73EB ',
                    fontSize:'17px',
                    fontWeight:'500',
                    lineHeight:'150%',
                    backgroundColor:'transparent',
                    border:'none',
                    height:'3em',
                    marginTop:'1em'
                    
                }}>Close</Button>
            </Grid>
            <Grid item xs={3}>
                <Button fullWidth style={{
                    color: '#FFF ',
                    fontSize:'16px',
                    fontWeight:'600',
                    lineHeight:'150%',
                    backgroundColor:'#364D3F',
                    border:'none',
                    borderRadius:'7.5px',
                    width:'10vw',
                    height:'3em',
                    marginTop:'1em'
                }}>Agree</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
        
        </Box>
    )
}
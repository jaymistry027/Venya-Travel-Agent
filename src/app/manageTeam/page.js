'use client'
import React from 'react'
import NavMain from '../NavMain'
import Box from '@mui/material/Box';
import { DataGrid, DataGridOverlay } from '@mui/x-data-grid';
import './manageTeam.css';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { GridRowClassNameParams } from '@mui/x-data-grid';
import '../general.css';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Star from '../Images/Star1.webp';
import Check from '../Images/check.webp';
import Image from "next/image";

// import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};





const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));


function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen} className='submit' sx={{fontFamily:'Roboto'}}>Create</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 522, height: 472 }}>
          <div className='enclosingContainer'>
            <Image src={Star} alt="image of star" />
            <Image src={Check} alt="image of checkmark" />
          </div>
          <Typography className="tag1">Sub User added successfully!</Typography>
          <div className='tagencloser'>
            <Typography class="tag2">Your new Sub User will get a password reset link on their official email address.</Typography>
          </div>
          <Button onClick={handleClose} className="handle-got-it">Got It!</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function ParentModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen} className="subuserclass" sx={{fontFamily:'Roboto'}}>+ Add Sub User</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 522, height: 565 }}>
          <div className='b1'>
            <div className="division1Head">

              <h2 id="parent-modal-title" style={{fontFamily:'Roboto'}}>Add Sub User <CloseIcon onClick={handleClose} sx={{ marginLeft: 26.5 }} /></h2>

            </div>
          </div>


          <div class="content-container">
            <Typography className="title-inside-modal" sx={{fontFamily:'Roboto'}}><b>Sub User Details</b></Typography>

          </div>

          <div className="outside-contents">
            <div className="contents">
              <Typography className="button-header">Full Name</Typography>
              <input type="text" className="input"></input>
            </div>

            <div className="contents">
              <Typography className="button-header">Phone Number</Typography>
              <input type="text" className="input"></input>
            </div>

            <div className="contents">
              <Typography className="button-header">Official Email</Typography>
              <input type="text" className="input"></input>
            </div>

            <ChildModal />
          </div>


        </Box>




      </Modal>
    </React.Fragment>
  );
}





export default function Page() {

  var i = 1;
  const [isLoading, setIsLoading] = useState(true);
  const getRowClassName = (params) => {
    console.log(params.id)
    return params.id % 2 === 1 ? 'alternateRow' : '';
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const [isLoading1, setIsLoading1] = useState(true);
  // const getRowClassName1 = (params) => {
  //     return params.id % 2 === 1 ? 'alternateRow' : '';
  // };

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  //Function for modal 2.
  // const [isLoading1, setIsLoading1] = useState(true);
  //   const getRowClassName1 = (params) => {
  //       return params.id % 2 === 1 ? 'alternateRow' : '';
  //   };
  //   const [open1, setOpen1] = React.useState(false);
  // const handleOpen1 = () => {
  //   setOpen1(true);
  // };
  // const handleClose1 = () => {
  //   setOpen1(false);
  // };

  // const active = () => {
  //   i = i + 1;
  //   console.log(i%2);
  //   setSwitchText(i%2 ? "Active" : "Inactive");
  //   // if (i % 2 != 0) {
  //   //   setSwitchText("Inactive");
  //   // }
  //   // else {
  //   //   setSwitchText("Active");
  //   // }
  // };
  const [rowStates, setRowStates] = useState({});

const active = (params) => {
  const rowId = params.id;
  setRowStates((prevRowStates) => ({
    ...prevRowStates,
    [rowId]: prevRowStates[rowId] === "Active" ? "Inactive" : "Active",
  }));
};
  


  const columns = [
    {
      field: 'id',
      headerName: 'User Id',
      width: 299,
      headerClassName: "head1",
      fontFamily: "Roboto",
    },

    {
      field: 'userName',
      headerName: 'User Name',
      description: 'This column has a value getter and is not sortable.',
      width: 315,
      headerClassName: "head1",
      fontFamily: "Roboto",
    },

    {
      field: 'officialEmail',
      headerName: 'Official Email',
      width: 325,
      headerClassName: "head1",
      fontFamily: "Roboto",

    },

    {
      field: 'phoneNo',
      headerName: 'Phone Number',
      width: 310,
      headerClassName: "head1",
      fontFamily: "Roboto",
    },

    {
      field: 'status',
      headerName: 'Status',
      width: 290,
      headerClassName: "head1",
      fontFamily: "Roboto",
      renderCell: (params) => {
        return (
          <FormControlLabel
    control={<IOSSwitch sx={{ m: 1 }} onClick={() => active(params)}  />}
    label={rowStates[params.id] || params.row.status} // Use the state or default to the status from rows
  />

        )
      }

    },

    {
      field: 'action',
      headerName: 'Action',
      width: 320,
      headerClassName: "head1",
      renderCell: (params) => {
        const active = () => {
          console.log("abc");
        };
        return (
          <div>
            <Button onClick={handleOpen} className="action1" sx={{ fontFamily: "Roboto" }}><BorderColorOutlinedIcon className='edit' />Edit</Button>
            <Button className="action2" sx={{ fontFamily: "Roboto" }}><DeleteOutlineOutlinedIcon className='edit' />Delete</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 522, height: 565 }}>

                <div className='b1'>
                  <div className="division1Head" sx={{ fontFamily: "Roboto" }}>

                    <h2 id="parent-modal-title" sx={{ fontFamily: "Roboto" }}>Edit User Details <CloseIcon onClick={handleClose} sx={{ marginLeft: 26.5 }} /></h2>

                  </div>
                </div>


                <div class="content-container">
                  <Typography className="title-inside-modal" sx={{ fontFamily: "Roboto" }}><b>Sub User Details</b></Typography>

                </div>

                <div className="outside-contents">
                  <div className="contents">
                    <Typography className="button-header" sx={{ fontFamily: "Roboto" }}>Full Name</Typography>
                    <input type="text" className="input"></input>
                  </div>

                  <div className="contents">
                    <Typography className="button-header" sx={{ fontFamily: "Roboto" }}>Phone Number</Typography>
                    <input type="text" className="input"></input>
                  </div>

                  <div className="contents">
                    <Typography className="button-header" sx={{ fontFamily: "Roboto" }}>Official Email</Typography>
                    <input type="text" className="input"></input>
                  </div>

                  <div className="contents">
                    <button className='submit' type='submit' onClick={handleClose} sx={{ fontFamily: "Roboto" }}>Submit</button>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        );
      }

    },


  ];

  const rows = [
    { status: "Inactive",id: "1", uniqueData: ['₹50000/-', 'Incl. of all taxes'], phoneNo: "+91 91912 21215", cincout: '21/09/2023 - 30/09/2023', officialEmail: "karan@venya.com", userName: "Karan Malhotra" },
    { status: "Inactive",id: "2", uniqueData: ['₹50000/-', 'Incl. of all taxes'], phoneNo: "+91 91912 21215", cincout: '21/09/2023 - 30/09/2023', officialEmail: "karan@venya.com", userName: "Karan Malhotra" },
    { status: "Inactive",id: "3", uniqueData: ['₹50000/-', 'Incl. of all taxes'], phoneNo: "+91 91912 21215", cincout: '21/09/2023 - 30/09/2023', officialEmail: "karan@venya.com", userName: "Karan Malhotra" },
    { status: "Inactive",id: "4", uniqueData: ['₹50000/-', 'Incl. of all taxes'], phoneNo: "+91 91912 21215", cincout: '21/09/2023 - 30/09/2023', officialEmail: "karan@venya.com", userName: "Karan Malhotra" },
    { status: "Inactive",id: "5", uniqueData: ['₹50000/-', 'Incl. of all taxes'], phoneNo: "+91 91912 21215", cincout: '21/09/2023 - 30/09/2023', officialEmail: "karan@venya.com", userName: "Karan Malhotra" },
    { status: "Inactive",id: "6", uniqueData: ['₹50000/-', 'Incl. of all taxes'], phoneNo: "+91 91912 21215", cincout: '21/09/2023 - 30/09/2023', officialEmail: "karan@venya.com", userName: "Karan Malhotra" },
    { status: "Inactive",id: "7", uniqueData: ['₹50000/-', 'Incl. of all taxes'], phoneNo: "+91 91912 21215", cincout: '21/09/2023 - 30/09/2023', officialEmail: "karan@venya.com", userName: "Karan Malhotra" },
    { status: "Inactive",id: "8", uniqueData: ['₹50000/-', 'Incl. of all taxes'], phoneNo: "+91 91912 21215", cincout: '21/09/2023 - 30/09/2023', officialEmail: "karan@venya.com", userName: "Karan Malhotra" },
    { status: "Inactive",id: "9", uniqueData: ['₹50000/-', 'Incl. of all taxes'], phoneNo: "+91 91912 21215", cincout: '21/09/2023 - 30/09/2023', officialEmail: "karan@venya.com", userName: "Karan Malhotra" },
  ];

  return (
    <>
      <NavMain />


      <container className="cont1" sx={{ fontFamily: "Roboto" }}>
        Manage Team
        <ParentModal />


        <div className='ext'>
          {/* <container className="outside">
                    <container className="ongoing">Ongoing</container>
                    <container className="upcoming">Upcoming</container>
                    <container className="past">Past</container>
                </container> */}

        </div>
      </container>

      <Box className="cont2" sx={{ height: 600, width: '100%' }}>
        {/* <DataGridOverlay loading={isLoading}> */}
        <DataGrid

          rows={rows}
          columns={columns}
          getRowClassName={getRowClassName} // Apply the row class here
          hideFooterPagination={true}
        // getRowClassName={(params) =>
        //     params.rowIndex % 2 === 1 ? classes.alternateRow : ''
        //   }
        // initialState={{
        //     // pagination: {
        //     //     paginationModel: {
        //     //         pageSize: 5,
        //     //     },
        //     // },
        // }}

        // pageSizeOptions={[9]}
        />
        {/* </DataGridOverlay> */}
      </Box>



    </>
  )
}
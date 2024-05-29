'use client'
import React from 'react'
import NavMain from '../NavMain'
import Box from '@mui/material/Box';
import { DataGrid,DataGridOverlay } from '@mui/x-data-grid';
import './paymentConfirmed.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Image from 'next/image';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { GridRowClassNameParams } from '@mui/x-data-grid';
import '../general.css'

const columns = [
    { field: 'id',
     headerName: 'Booking Id',
     width: 242,
     headerClassName:"head1",
    },

    {
        field: 'propertyName',
        headerName: 'Property Name',
        width: 400,
        headerBackgroundColor:'red',
        headerClassName:"head1",
    },
    {
        field: 'cincout',
        headerName: 'Check In - Check Out',
        width: 340,
        headerClassName:"head1",

    },
    {
        field: 'guestName',
        headerName: 'Guest Details',
        description: 'This column has a value getter and is not sortable.',
        width: 300,
        headerClassName:"head1",
    },
    {
        field: 'totalPayablePrice',
        headerName: 'Total Amount Paid',
        description: 'Amount',
        width: 333,
        headerClassName:"head1",
    },
    {
        field: 'booking',
        headerName: 'Payment Confirmed',
        description: 'Status of Booking',
        renderCell: (params) => {
            if (Array.isArray(params.row.booking)) {
              return (
                <div>
                    <AccessTimeIcon/>
                  {params.row.booking.map((line, id) => (
                    <div key={id}>{line}</div>
                  ))}
                </div>
              );
            } else {
              return <div>{params.row.booking}</div>;
            }
          },
        width: 245,
        headerClassName:"head1",
    },
];

const rows = [
    { id: "1", totalPayablePrice: '₹50000/- Incl. of all taxes' , propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023', guestName: "Rajesh Hiralal Kotwal" ,booking:[" ","Confirmation Awaited"]},
    { id: "2", totalPayablePrice: '₹50000/- Incl. of all taxes', propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023',  guestName: "Rajesh Hiralal Kotwal" ,booking:[" ","Confirmation Awaited"]},
    { id: "3", totalPayablePrice: '₹50000/- Incl. of all taxes', propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023',  guestName: "Rajesh Hiralal Kotwal" ,booking:[" ","Confirmation Awaited"]},
    { id: "4", totalPayablePrice: '₹50000/- Incl. of all taxes', propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023',  guestName: "Rajesh Hiralal Kotwal" ,booking:[" ","Confirmation Awaited"]},
    { id: "5", totalPayablePrice: '₹50000/- Incl. of all taxes', propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023',  guestName: "Rajesh Hiralal Kotwal" ,booking:[" ","Confirmation Awaited"]},
    { id: "6", totalPayablePrice: '₹50000/- Incl. of all taxes', propertyName: "Sheraton Grand Cape Coral", cincout: '21/09/2023 - 30/09/2023',  guestName: "Rajesh Hiralal Kotwal" ,booking:[" ","Confirmation Awaited"]},
    { id: "7", totalPayablePrice: '₹50000/- Incl. of all taxes', propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023',  guestName: "Rajesh Hiralal Kotwal" ,booking:[" ","Confirmation Awaited"]},
    { id: "8", totalPayablePrice: '₹50000/- Incl. of all taxes', propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023',  guestName: "Rajesh Hiralal Kotwal" ,booking:[" ","Confirmation Awaited"]},
    { id: "9", totalPayablePrice: '₹50000/- Incl. of all taxes', propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023',  guestName: "Rajesh Hiralal Kotwal" ,booking:[" ","Confirmation Awaited"]},
];



export default function Page() {
    const [isLoading, setIsLoading] = useState(true);
    const getRowClassName = (params) => {
        return params.id % 2 === 1 ? 'alternateRow' : '';
    };

    return (
        <>
            <NavMain />
            
            <container className="extcont">
            <container className="cont1">
                Payment Confirmed
            
            </container>
                <Box className="cont2" sx={{ height: 550, width: '100%' }}>
                
                <DataGrid
                    
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